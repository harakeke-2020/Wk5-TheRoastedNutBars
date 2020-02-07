const config = require('../knexfile').development
const database = require('knex')(config)

function getDogFact (db = database) {
  return db('dogfacts').select()
    .where('id', randomID())
}

function close (db = database) {
  db.destroy()
}

function randomID () {
  return Math.floor(Math.random() * Math.floor(29)) + 1
}

module.exports = {
  getDogFact,
  close
}
