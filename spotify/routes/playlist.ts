/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import axios from 'axios';

import spotify from '../config/spotify.config';
import cache from '../cache';

const {
  client_id,
} = spotify;

const playlist = async (req: Request, res: Response) => {
  try {
    const accessCode = await cache.get(client_id);
    const cachedData = await cache.get(`playlist:user:${accessCode}`);

    if (cachedData) {
      res.status(200).send(JSON.parse(cachedData));
    } else {
      const { data } = await axios({
        url: 'https://api.spotify.com/v1/me/playlists',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessCode}`,
        },
      });

      const { items } = data;
      cache.add(`playlist:user:${accessCode}`, 60, JSON.stringify(items));

      res.status(200).send(items);
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

export default playlist;
