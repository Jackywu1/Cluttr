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
        // Authorization: 'Bearer AQCEmrpeSWderi3Qu3ZUsrWx4g_IRgsUwveVWdRZKN51ZzzRqCBT4M7wkkHGmrAWC5iJJ6-wxfdhtfgtiNmIwgRAMvtOEeEB9c2w0MqlCjpb24zCpY7kUtu5HfxYxNcbXsHIniCqwNmkih9q3s-OC-z7sS7GNm3p26_ThhcengGvH8HFJA13ngMhng',
      },
    });

    const { items } = response.data;
    res.status(200).send(items);
  } catch (err) {
    res.status(404).send(err);
  }
};

export default playlist;
