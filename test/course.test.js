const request = require('supertest')
const app = require('../app')
// const app = require('../index')

describe('API /course', () => {
  test('Should get all courses', async (done) => {
    request(app).get('/api/courses/cursos').then(response => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })
})