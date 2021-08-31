/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// import { Request, Response } from 'express';
import axios from 'axios';
import Options from '../options';

const request = async (id: string, token: string) => await axios({
  url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

const playlistInfo = async (
  { id }: { id: string },
  { cache }: Options,
  callback: (err: Error | null, data: any | null) => void,
) => {
  try {
    const access_token = await cache.get(process.env.client_id as string);
    const cachedData = await cache.get(`playlist:${id}`);
    if (cachedData) {
      callback(null, JSON.parse(cachedData));
    } else {
      const { data } = await request(id, access_token);
      const { items } = data;

      cache.add(`playlist:${id}`, 60, JSON.stringify(items));
      callback(null, items);
    }
  } catch (err) {
    callback(err, null);
  }
};

export default playlistInfo;
