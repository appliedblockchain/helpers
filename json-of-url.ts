import { inspect } from 'util'
import requestOfUrl from './request-of-url'

/** @returns json from basic http(s) get request on `url`. */
export const jsonOfUrl =
  async (url: string): Promise<unknown> => {
    const request = requestOfUrl(url)
    if (!request) {
      throw new TypeError(`Expected request for ${inspect(url)} url.`)
    }
    return new Promise((resolve, reject) => {
      const req = request(url, res => {
        const chunks = []
        res.on('data', _ => chunks.push(_))
        res.once('end', () => {
          try {
            resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')))
          } catch (err) {
            reject(err)
          }
        })
        res.once('error', reject)
      })
      req.once('error', reject)
      req.end()
    })
  }

export default jsonOfUrl
