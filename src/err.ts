export type Code = number | string; 
export type Info = void | object;

export default class Err extends Error {
  code: Code;
  info: void | object | undefined;

  constructor(code: Code, message?: string, info?: Info) {
    super(message || String(code))
    this.code = code
    this.info = info
  }
}
