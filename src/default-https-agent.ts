
import { Agent } from 'https';
import booleanOfString from './boolean-of-string';
import integerOfString from './integer-of-string';

const defaultKeepAlive = 'true'
const defaultKeepAliveMsecs = '1000'
const defaultMaxSockets = '64'
const defaultMaxFreeSockets = '32'
const defaultTimeout = '10000'

const keepAlive = booleanOfString(
  process.env.HTTPS_AGENT_KEEP_ALIVE ||
  process.env.HTTP_AGENT_KEEP_ALIVE ||
  defaultKeepAlive
)

const keepAliveMsecs = integerOfString(
  process.env.HTTPS_KEEP_ALIVE_MSECS ||
  process.env.HTTP_KEEP_ALIVE_MSECS ||
  defaultKeepAliveMsecs
)

const maxSockets = integerOfString(
  process.env.HTTPS_AGENT_MAX_SOCKETS ||
  process.env.HTTP_AGENT_MAX_SOCKETS ||
  defaultMaxSockets
)

const maxFreeSockets = integerOfString(
  process.env.HTTPS_AGENT_MAX_FREE_SOCKETS ||
  process.env.HTTP_AGENT_MAX_FREE_SOCKETS ||
  defaultMaxFreeSockets
)

const timeout = integerOfString(
  process.env.HTTPS_AGENT_TIMEOUT ||
  process.env.HTTP_AGENT_TIMEOUT ||
  defaultTimeout
)

const defaultHttpsAgent = new Agent({
  keepAlive,
  keepAliveMsecs,
  maxSockets,
  maxFreeSockets,
  timeout
})

export default defaultHttpsAgent;
