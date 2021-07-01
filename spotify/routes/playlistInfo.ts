/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import axios from 'axios';

import spotify from '../../config/spotify.config';
import cache from '../cache';

const {
  client_id,
} = spotify;

const playlistInfo = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const access_token = await cache.get(client_id);

    const response = await axios({
      url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
    });

    const { items } = response.data;
    res.status(200).send(items);
  } catch (err) {
    res.status(404).send(err);
  }
};

export default playlistInfo;
