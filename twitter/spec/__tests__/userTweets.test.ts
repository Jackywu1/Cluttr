/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import request from 'supertest';

import twitter from '../..';
import Tweet from '../../../twitter-graph/interfaces/tweet';
// import NormalizedCache from '../cache/normalized-cache';
import mocks from '../mocks';

jest.mock('../../../twitter/cache');

describe('GET /twitter/tweets/:userid', () => {
  const testuserid = '2187489492'; // illenium
  const cache = mocks.mockCache();
  const testtweet: Tweet = {
    id: '1427681723303661600',
    created_at: 'Tue Aug 17 17:20:22 +0000 2021',
    text: 'I sit in the shade cuz I burn easy https://t.co/c7s5p3opAg',
  };

  test('responds with data', async () => {
    const instance = twitter();

    const { statusCode, body } = await request(instance).get(`/twitter/tweets/${testuserid}`);
    const tweet: Tweet = body[0];

    expect(statusCode).toBe(200);

    expect(tweet.id).toBeDefined();
    expect(tweet.created_at).toBeDefined();
    expect(tweet.text).toBeDefined();
  });

  test('data is cached', async () => {
    const instance = twitter({ cache });

    const { statusCode: statusCode1, body: body1 } = await request(instance).get(`/twitter/tweets/${testuserid}`);
    const { statusCode: statusCode2, body: body2 } = await request(instance).get(`/twitter/tweets/${testuserid}`);

    expect(statusCode1).toBe(200);
    expect(body1).toBeDefined();

    expect(statusCode1).toBe(statusCode2);
    expect(body1).toEqual(body2);

    // expect(mockAdd).toHaveBeenCalledTimes(1);
    expect(cache.get).toHaveReturnedTimes(2);
  });
});
