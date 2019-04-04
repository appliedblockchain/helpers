// @flow

const { Agent } = require('http')
const booleanOfString = require('./boolean-of-string')
const integerOfString = require('./integer-of-string')

const defaultKeepAlive = 'true'
const defaultKeepAliveMsecs = '1000'
const defaultMaxSockets = '64'
const defaultMaxFreeSockets = '32'
const defaultTimeout = '10000'

const keepAlive = booleanOfString(process.env.HTTP_AGENT_KEEP_ALIVE || defaultKeepAlive)
const keepAliveMsecs = integerOfString(process.env.HTTP_KEEP_ALIVE_MSECS || defaultKeepAliveMsecs)
const maxSockets = integerOfString(process.env.HTTP_AGENT_MAX_SOCKETS || defaultMaxSockets)
const maxFreeSockets = integerOfString(process.env.HTTP_AGENT_MAX_FREE_SOCKETS || defaultMaxFreeSockets)
const timeout = integerOfString(process.env.HTTP_AGENT_TIMEOUT || defaultTimeout)

const defaultHttpAgent = new Agent({
  keepAlive,
  keepAliveMsecs,
  maxSockets,
  maxFreeSockets,
  timeout
})

module.exports = defaultHttpAgent
