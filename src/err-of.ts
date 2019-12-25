import Err, { Code, Info } from './err';

export default function errOf(code: Code, message?: string, info?: Info) {
  return new Err(code, message, info)
}
