/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import axios from 'axios';

import { Options } from '../options';

const request = async (accessCode: string): Promise<any> => {
  return axios({
    url: 'https://api.spotify.com/v1/me/playlists',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessCode}`,
    }
  });
};

export const playlist = async (
  { cache }: Options,
  callback: (err: Error | null, data: any | null) => void,
) => {
  try {
    const accessCode = await cache.get(process.env.client_id as string);
    const cachedData = await cache.get(`playlist:user:${accessCode}`);

    if (cachedData) {
      callback(null, JSON.parse(cachedData));
    } else {
      const { data } = await request(accessCode);
      const { items } = data;

      await cache.add(`playlist:user:${accessCode}`, 60, JSON.stringify(items));
      callback(null, items);
    }
  } catch (err) {
    callback(new Error(err), null);
  }
};

// export default playlist;
