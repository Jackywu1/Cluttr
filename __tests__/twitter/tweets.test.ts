/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import * as request from 'supertest';

import twitter from '../../twitter';
import cache from '../../twitter/cache';

jest.mock('../../twitter/cache');

describe('TEST Twitter service', () => {
  test('GET /twitter/tweets/:userid', (done) => {
    cache.get.mockResolvedValue();
    const userid = '2187489492'; // illenium

    request(twitter)
      .get(`/twitter/tweets/${userid}`)
      .expect(200, done);
  });
});
