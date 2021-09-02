/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import axios from 'axios';
import querystring from 'querystring';

import { Options } from '../options';

const request = async (query: string, accessToken: string): Promise<any | Error> => await axios({
  url: `https://youtube.googleapis.com/youtube/v3/search?${query}}`,
  method: 'GET',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const search = async (
  { term }: { term: string },
  { cache }: Options,
  callback: (err: Error | null, data: any | null) => void,
) => {
  try {
    const cachedData = await cache.get(term as string);

    if (cachedData) callback(null, JSON.parse(cachedData));
    else {
      const query = querystring.stringify({
        part: 'snippet',
        q: term as string,
      });

      const accessToken = await cache.get(process.env.client_id as string);
      const { data } = await request(query, accessToken);

      const { items } = data;
      await cache.add(term as string, 60, JSON.stringify(items));

      callback(null, items);
    }
  } catch (err) {
    callback(new Error(err), null);
  }
};
