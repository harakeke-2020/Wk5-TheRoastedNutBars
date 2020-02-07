const router = require('express').Router()
const request = require('superagent')
const db = require('./db.js')

const api = {
  catFacts: 'https://cat-fact.herokuapp.com/facts'
}

router.get('/catFacts', (req, res) => {
  return request.get(api.catFacts)
    .then(response => {
      const resp = response.body
      res.json({ resp })
    })
})

router.get('/dogFacts', (req, res) => {
  return db.getDogFact()
    .then(response => {
      res.json(response[0].dogfact)
    })
})

module.exports = router
