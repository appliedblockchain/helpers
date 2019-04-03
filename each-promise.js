// @flow

// Similar to `Promise.all` but yields after each resolved promise.
// Exceptions are captured. Results are yielded as `[ err, result, i ]` tuple.
async function* eachPromise/*:: <T> */(promises /*: Promise<T>[] */) /*: AsyncGenerator<[ ?Error, ?T, number ], any, any> */ {

  const results = []

  let oncePushed /*: ?Function */ = null

  const settled = (err, result, i) => {
    results.push([ err, result, i ])
    if (oncePushed) {
      oncePushed()
      oncePushed = null
    }
  }

  promises.forEach(
    (promise, i) => promise
      .then(result => settled(void 0, result, i))
      .catch(err => settled(err, void 0, i))
  )

  for (let i = 0; i < promises.length; i++) {
    yield await new Promise(resolve => {
      if (results.length) {
        resolve(results.shift())
      } else {
        oncePushed = () => resolve(results.shift())
      }
    })
  }

}

module.exports = eachPromise
