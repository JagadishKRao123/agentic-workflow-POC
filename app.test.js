const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
  test('GET /status should return status', async () => {
    const response = await request(app).get('/status');
    expect(response.status).toBe(200);
  });
});