const request = require('supertest');
const server = require('./server');

const testUser = {
  username: 'testing-user',
  password: 'password'
}


it('DB should operate in testing ', () => {
  expect(process.env.DB_ENV).toBe('testing')
});

describe('server', () => {
  describe('GET /', () => {
    it('should return 201 status', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        })
    })
  })
})

describe('POST api/auth/register', () => {
  it('should return 201 status', () => {
    return request(server)
      .post('/api/auth/register')
      .send(testUser)
      .expect(201)
  })
  it('should return json formatted response', () => {
    return request(server)
      .post('/api/auth/register')
      .send(testUser)
      .expect('Content-Type', /json/)
  })
})

describe('POST api/auth/login', () => {
  it('should return 200 status', () => {
    return request(server)
      .post('/api/auth/login')
      .send(testUser)
      .expect(200)
  })
  it('should return json formatted response', () => {
    return request(server)
      .post('/api/auth/login')
      .send(testUser)
      .expect('Content-Type', /json/)
  })
})