import request from 'superagent'

const catFactsUrl = 'http://localhost:3000/api/v1/catFacts'

export function getFacts () {
  return request
    .get(`${catFactsUrl}`)
}

// export function appendWidget (widget) {
//   return request
//     .post(widgetUrl)
//     .send(widget)
//     .then(response => response.body)
//   }
