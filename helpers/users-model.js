const db = require("../data/dbConfig.js");

module.exports = {
  add,
  findById,
  find,
  findBy,
}

function find() {
  return db('users').select('id', 'username', 'department')
}

function findBy(filter) {
  return db('users')
    .where(filter)
    .first()
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids
      return findById(id)
    })
}

function findById(id) {
  return db('users')
    .select('id', 'username', 'department')
    .where({ id })
    .first();
}