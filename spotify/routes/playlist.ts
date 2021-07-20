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
    const response = await axios({
      url: 'https://api.spotify.com/v1/me/playlists',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessCode}`,
      },
    });

    const { items } = response.data;
    res.status(200).send(items);
  } catch (err) {
    res.status(404).send(err);
  }
};

export default playlist;
