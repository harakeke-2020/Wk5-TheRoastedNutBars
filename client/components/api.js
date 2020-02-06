import request from 'superagent'

const catFactsUrl = 'http://localhost:3000/api/v1/catFacts'
const catImageUrl = 'https://aws.random.cat/meow'

export function getFacts () {
  return request
    .get(`${catFactsUrl}`)
}

export function getCats () {
  return request
    .get(catImageUrl)
}

// export function appendWidget (widget) {
//   return request
//     .post(widgetUrl)
//     .send(widget)
//     .then(response => response.body)
//   }
