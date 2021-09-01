/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import querystring from 'querystring';

import Options from '../options';

const expiration: number = parseInt(process.env.expiration as string) || 60;

interface Query {
  client: string;
  [key: string]: string;
}

const request = async (artistIds: string): Promise<any | Error> => {
  const queryString = querystring.stringify({
    artistIds,
    client: process.env.client as string,
  } as Query);

  return axios.get(`https://edmtrain.com/api/events?${queryString}`);
};

export default async (
  artistIds: string,
  { cache }: Options,
  callback: (err: Error | null, data: any | null) => void,
) => {
  try {
    const cachedData = await cache?.get(artistIds);
    if (cachedData) callback(null, JSON.parse(cachedData));
    else {
      const { data } = await request(artistIds);
      await cache?.add(artistIds, expiration, JSON.stringify(data));

      callback(null, data);
    }
  } catch (err) {
    callback(new Error(err), null);
  }
};
