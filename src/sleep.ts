// @flow

function sleep(milliseconds /*: number */) /*: Promise<void> */ {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

module.exports = sleep
