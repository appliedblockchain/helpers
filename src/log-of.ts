
import os from 'os';
import { inspect } from 'util';
import isString from './is-string'

const { keys } = Object

export type Target = {
  error: Function,
  warn: Function,
  info: Function,
  debug: Function
}

export type Log = {
  target: Target,
  fatal: Function,
  error: Function,
  warn: Function,
  info: Function,
  debug: Function,
  trace: Function
}

const pid = process.pid
const hostname = os.hostname()

export enum levels {
  off = 70,
  fatal = 60,
  error = 50,
  warn = 40,
  info = 30,
  debug = 20,
  trace = 10
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

type targetLogMethod = 'error' | 'warn' | 'info' | 'debug';

// Mapping from log method name to target method name.
const targetMethodOfLogMethod: Record<string, targetLogMethod> = {
  fatal: 'error',
  error: 'error',
  warn: 'warn',
  info: 'info',
  debug: 'debug',
  trace: 'debug'
}


const logMethods = keys(targetMethodOfLogMethod)

const modLevels: Record<string, number> = (process.env.LOG || 'off')
  .split(',')
  .map(entry => entry.includes('=') ?
    entry.split('=') :
    [ 'global', entry ]
  )
  .reduce((r: Record<string, number>, [ k, v]) => ({ ...r, [k]: levels[v] || levels.off }), {})

function noop() {}

function now() {
  return new Date().toISOString()
}

// TODO: Protect against circular references.
function jsonOf(time: string, level: levels, name: string, ...args: any[]): string {
 return JSON.stringify(
    args.reduce((
      r: any, e
    ) => Object.assign(r, typeof e === 'string' ? { msg: e } : e), { pid, hostname, time, level, name, v: 0 })
  )
}

const targets = {
  console: targetMethods.reduce((r: any, k: string) => ({ ...r, [k]: (time: string, level: levels, mod: string, ...rest: any[]) => console[k as targetLogMethod](`[${time}]`, `${labelOfLevel[level].padStart(5, ' ')}:`, `${mod}/${pid}`, `on ${hostname}:`, ...rest.map(_ => isString(_) ? _ : inspect(_))) }), {}),
  bunyan: targetMethods.reduce((r: any, k: string) => ({ ...r, [k]: (...args: any[]) => console[k](jsonOf(...args)) }), {})
}

export default function logOf(mod: string, target?: Target = targets[logTarget]): Log  {
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
      )
  )
}

