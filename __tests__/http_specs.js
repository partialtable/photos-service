const supertest = require('supertest');
const app = require('../server/server');
const server = require('../server/server');
// const db = require('../database');

app.listen(3003);

const request = supertest(app);

describe('Make correct GET request to /api/restaurants/photos', () => {
  afterAll(() => {
    server.close();
  });
  it('should respond with status 200 after a GET request to /api/restaurants/photos', async (done) => {
    const response = await request.get('/api/restaurants/photos');
    expect(response.status).toBe(200);
    done();
  });
});
