import request from 'supertest';
import { app } from '../server/app';
import { pool } from '../server/db';

describe('Users', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'John Doe',
      })
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });
});

afterAll(done => {
  pool.end();
  done();
});