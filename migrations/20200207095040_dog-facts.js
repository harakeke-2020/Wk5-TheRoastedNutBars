exports.up = (knex) => {
  return knex.schema.createTable('dogfacts', table => {
    table.increments('id')
    table.string('dogfact')
  })
}

exports.down = (knex) => { return knex.schema.dropTable('dogfacts') }
