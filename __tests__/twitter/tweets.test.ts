/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import request from 'supertest';

import twitter from '../../twitter';
import Tweet from '../../twitter-graph/interfaces/tweet';
import NormalizedCache from '../../twitter/cache/normalized-cache';

jest.mock('../../twitter/cache');

describe('GET /twitter/tweets/:userid', () => {
  const testuserid = '2187489492'; // illenium
  const testtweet: Tweet = {
    id: '1427681723303661600',
    created_at: 'Tue Aug 17 17:20:22 +0000 2021',
    text: 'I sit in the shade cuz I burn easy https://t.co/c7s5p3opAg',
  };

  const mockAdd = jest.fn()
    .mockImplementation((
      key: string,
      expiration: number,
      data: string,
    ): Promise<string> => new Promise((resolve) => {
      resolve('SUCCESS');
    }));
  const mockGet = jest.fn()
    .mockImplementation((key: string): Promise<string> => new Promise((resolve) => {
      resolve(JSON.stringify(testtweet));
    }));

  const cache: NormalizedCache = {
    add: mockAdd,
    get: mockGet,
  };

  test('responds with data', async () => {
    const { statusCode, body } = await request(twitter()).get(`/twitter/tweets/${testuserid}`);
    const tweet = body[0];

    expect(statusCode).toBe(200);

    expect(tweet.id).toBeDefined();
    expect(tweet.created_at).toBeDefined();
    expect(tweet.text).toBeDefined();
  });

  test('data is cached', async () => {
    const { statusCode: statusCode1, body: body1 } = await request(twitter({ cache })).get(`/twitter/tweets/${testuserid}`);
    const { statusCode: statusCode2, body: body2 } = await request(twitter({ cache })).get(`/twitter/tweets/${testuserid}`);

    expect(statusCode1).toBe(200);
    expect(body1).toBeDefined();

    expect(statusCode1).toBe(statusCode2);
    expect(body1).toEqual(body2);

    // expect(mockAdd).toHaveBeenCalledTimes(1);
    expect(mockGet).toHaveReturnedTimes(2);
  });
});
