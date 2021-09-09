import request from 'supertest';

import { twitter } from '../..';
import { mockCache } from '../mocks';

jest.mock('../../../twitter/cache');

describe('GET /twitter/:user', () => {
  const cache = mockCache();
  const testuser = 'illenium';

  test('responds with data', async () => {
    const instance = twitter();

    const { statusCode, body } = await request(instance).get(`/twitter/${testuser}`);
    const { data: user } = body;

    expect(statusCode).toBe(200);

    expect(user.id).toBeDefined();
    expect(user.name).toBeDefined();
    expect(user.public_metrics).toBeDefined();
    expect(user.username).toBeDefined();
  });

  test('data is cached', async () => {
    const instance = twitter({ cache });

    const { statusCode: statusCode1, body: body1 } = await request(instance).get(`/twitter/${testuser}`);
    const { statusCode: statusCode2, body: body2 } = await request(instance).get(`/twitter/${testuser}`);

    expect(statusCode1).toBe(200);
    expect(body1).toBeDefined();

    expect(statusCode1).toBe(statusCode2);
    expect(body1).toEqual(body2);

    // expect(cache.add).toHaveBeenCalledTimes(1);
    expect(cache.get).toHaveBeenCalledTimes(2);
  });
});
