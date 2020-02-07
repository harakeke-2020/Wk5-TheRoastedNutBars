import request from 'superagent'

const catFactsUrl = 'http://localhost:3000/api/v1/catFacts'
const catImageUrl = 'https://aws.random.cat/meow'
const dogApiUrl = 'https://random.dog/woof.json'

export function getFacts () {
  return request
    .get(`${catFactsUrl}`)
}

export function getCats () {
  return request
    .get(catImageUrl)
}

// export function getDogs () {
//   return request
//     .get(dogApiUrl)
//     .then(response => response.body.url)
// }

export async function getDogsAsync () {
  let dogImageUrl

  do {
    const response = await request.get(dogApiUrl)
    dogImageUrl = response.body.url
  } while (dogImageUrl.includes('mp4'))

  return dogImageUrl
}

// export async function getDogsAsyncWithoutDo () {
//   let response = await request.get(dogApiUrl)
//   let dogImageUrl = response.body.url

//   while (dogImageUrl.includes('mp4')) {
//     response = await request.get(dogApiUrl)
//     dogImageUrl = response.body.url
//   }

//   return dogImageUrl
// }
