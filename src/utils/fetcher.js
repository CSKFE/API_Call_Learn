import { BASE_URL } from './url'
export const fetcher = (apiOptions, method = 'GET') => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.open(method, `${BASE_URL}${apiOptions}`, true)
    req.send()
    req.addEventListener('load', () => {
      if (req.readyState === 4) {
        resolve(req.response)
      } else {
        reject(new Error({ ErrorState: req.status, ErrorText: req.responseText }))
      }
    })
  })
}
