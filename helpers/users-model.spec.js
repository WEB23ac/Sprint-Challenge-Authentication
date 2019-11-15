const db = require("../database/dbConfig.js");

const { add } = require('./users-model');

const testUser = {
  username: 'user-test',
  password: 'password'
}

describe('users-model', () => {
  describe('add', () => {
    beforeEach(async () => {
      await db('users').truncate();
    })
    it('should add one user', async () => {
      await add(testUser)
      const users = await db('users');
      expect(users).toHaveLength(1)
    })
    it('should assign correct username to user', async () => {
      await add(testUser)
      const users = await db('users');
      expect(users[0]).toHaveProperty('username', testUser.username)
    })
  })

})