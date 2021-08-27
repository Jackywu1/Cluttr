/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import request from 'supertest';

import twitter from '../../twitter';
import NormalizedCache from '../../twitter/cache/normalized-cache';

jest.mock('../../twitter/cache');

describe('TEST Twitter service', () => {
  test('GET /twitter/tweets/:userid', (done) => {
    const cache: NormalizedCache = {
      add: jest.fn().mockResolvedValue(false),
      get: jest.fn().mockRejectedValue(new Promise((success) => success(null))),
    };

    const userid = '2187489492'; // illenium

    request(twitter({ cache }))
      .get(`/twitter/tweets/${userid}`)
      .expect(200, done);
  });
});
