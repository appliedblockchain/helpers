// @flow

const { existsSync, readFileSync } = require('fs')

function jsonOfFile(path /*: string */) /*: any */ {
  return existsSync(path) ?
    JSON.parse(readFileSync(path, { encoding: 'utf8' })) :
    void 0
}

module.exports = jsonOfFile
