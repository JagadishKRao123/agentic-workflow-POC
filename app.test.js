const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
  test('GET /health should return status ok', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });

  test('GET /status should return status', async () => {
    const response = await request(app).get('/status');
    expect(response.status).toBe(200);
  });
});
