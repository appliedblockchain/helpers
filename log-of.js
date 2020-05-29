// @flow

const { inspect } = require('util')
const { keys } = Object
const isString = require('./is-string')
const os = require('os')

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

const modLevels /*: { [string]: number } */ = (process.env.LOG || 'off')
  .split(',')
  .map(entry => entry.includes('=') ?
    entry.split('=') :
    [ 'global', entry ]
  )
  .reduce((r /*: any */, [ k, v ]) => ({ ...r, [k]: levels[v] || levels.off }), {})

function noop() {}

function now() {
  return new Date().toISOString()
}

/** @returns `true` if provided `value` can be safely assigned to the root bunyan json object, `false` otherwise. */
const bunyanSafe /*: mixed => boolean */ =
  value => (
    value != null &&
    typeof value === 'object' &&
    typeof value.pid === 'undefined' &&
    typeof value.hostname === 'undefined' &&
    typeof value.time === 'undefined' &&
    typeof value.level === 'undefined' &&
    typeof value.name === 'undefined' &&
    typeof value.v === 'undefined' &&
    typeof value.msg === 'undefined'
  )

// TODO: Protect against circular references.
function bunyanOf(time, level, name, ...args) {
  const r = {}
  const msgs = []
  for (const arg of args) {
    if (bunyanSafe(arg)) {
      Object.assign(r, arg)
    } else {
      msgs.push(typeof arg === 'string' ? arg : inspect(arg))
    }
  }
  const msg = msgs.join('; ')
  Object.assign(r, { pid, hostname, time, level, name, v: 0, msg })
  return r
}

const targets = {
  console: targetMethods.reduce((r /*: any */, k /*: any */) => ({ ...r, [k]: (time, level, mod, ...rest) => console[k](`[${time}]`, `${labelOfLevel[level].padStart(5, ' ')}:`, `${mod}/${pid}`, `on ${hostname}:`, ...rest.map(_ => isString(_) ? _ : inspect(_))) }), {}),
  bunyan: targetMethods.reduce((r /*: any */, k /*: any */) => ({ ...r, [k]: (...args) => console[k](bunyanOf(...args)) }), {})
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
