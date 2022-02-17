import { Application1RestApp } from 'krisemm/apps/app1/rest/config/Application1RestApp';
import request from 'supertest';
import { expect } from '@jest/globals';

describe('StatusGetControllerShould', () => {
  it('check if the app2 is working', async () => {
    const response = await request(Application1RestApp).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
