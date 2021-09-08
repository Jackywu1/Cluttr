import axios from 'axios';
import querystring from 'querystring';

import { Options } from '../options';

const expiration: number = parseInt(process.env.expiration as string) || 3600;

const request = (term: string, token: string): Promise<any | Error> => {
  const query = querystring.stringify({
    q: encodeURIComponent(term),
  });

  return axios({
    url: `http://api.genius.com/search?${query}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export const search = async (
  { term }: { term: string},
  { cache }: Options,
  callback: (err: Error | null, data : any | null) => void,
) => {
  try {
    const cachedData = await cache.get(term);
    if (cachedData) callback(null, JSON.parse(cachedData));
    else {
      const accessToken = await cache.get(process.env.client_id as string);

      const { data } = await request(term, accessToken);
      const { response } = data;

      await cache.add(term, expiration, JSON.stringify(response));

      callback(null, response);
    }
  } catch (err) {
    console.log(0);
    callback(new Error(err as string), null);
  }
};
