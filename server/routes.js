const router = require('express').Router()
const request = require('superagent')

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

module.exports = router
