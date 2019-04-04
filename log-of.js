// @flow

const os = require('os')
const { keys } = Object

/*::

type Target = {
  error: Function,
  warn: Function,
  info: Function,
  debug: Function
}

type Log = {|
  target: Target,
  fatal: Function,
  error: Function,
  warn: Function,
  info: Function,
  debug: Function,
  trace: Function
|}

*/

const pid = process.pid
const hostname = os.hostname()

const levels = {
  off: 70,
  fatal: 60,
  error: 50,
  warn: 40,
  info: 30,
  debug: 20,
  trace: 10
}

const labelOfLevel = {
  [levels.fatal]: 'FATAL',
  [levels.error]: 'ERROR',
  [levels.warn]: 'WARN',
  [levels.info]: 'INFO',
  [levels.debug]: 'DEBUG',
  [levels.trace]: 'TRACE'
}

const logTarget = process.env.LOG_TARGET || 'console'

// Methods that need to be defined on the target, ie. `console`.
const targetMethods = [ 'error', 'warn', 'info', 'debug' ]

// Mapping from log method name to target method name.
const targetMethodOfLogMethod = {
  fatal: 'error',
  error: 'error',
  warn: 'warn',
  info: 'info',
  debug: 'debug',
  trace: 'debug'
}

const logMethods = keys(targetMethodOfLogMethod)

const modLevels = (process.env.LOG || 'off')
  .split(',')
  .map(entry => entry.includes('=') ?
    entry.split('=') :
    [ 'global', entry ]
  )
  .reduce((r, [ k, v ]) => ({ ...r, [k]: levels[v] || levels.off }), {})

function noop() {}

function now() {
  return new Date().toISOString()
}

// TODO: Protect against circular references.
function jsonOf(time, level, name, ...args) {
  return JSON.stringify(
    args.reduce((r, e) => Object.assign(r, typeof e === 'string' ? { msg: e } : e), { pid, hostname, time, level, name, v: 0 })
  )
}

const targets = {
  console: targetMethods.reduce((r, k) => ({ ...r, [k]: (time, level, mod, ...rest) => console[k](`[${time}]`, `${labelOfLevel[level].padStart(5, ' ')}:`, `${mod}/${pid}`, `on ${hostname}:`, ...rest) }), {}),
  bunyan: targetMethods.reduce((r, k) => ({ ...r, [k]: (...args) => console[k](jsonOf(...args)) }), {})
}

function logOf(mod /*: string */, target /*:: ?: Target */ = targets[logTarget]) /*: Log */ {
  const level = modLevels[mod] || modLevels['global'] || levels.info
  return (
    logMethods
      .reduce(
        (r, k) => (
          {
            ...r,
            [k]: level <= levels[k] ?
              (...args) => target[targetMethodOfLogMethod[k]](now(), levels[k], mod, ...args) :
              noop
          }
        ),
        { target }
      ) /*: any */
  )
}

module.exports = logOf
