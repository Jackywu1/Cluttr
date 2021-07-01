/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import axios from 'axios';
import querystring from 'querystring';

import cache from '../cache';
import youtube from '../../config/youtube.config';

const {
  api_key,
  client_id,
} = youtube;

const search = async (req: Request, res: Response) => {
  try {
    // const { q } = req.query;
    const q = 'illenium';
    const query = querystring.stringify({
      part: 'snippet',
      q,
    });

    const accessToken = await cache.get(client_id);
    const response = await axios({
      url: `https://youtube.googleapis.com/youtube/v3/search?${query}}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const { items } = response.data;
    res.status(200).send(items);
  } catch (err) {
    res.status(404).send(err);
  }
};

export default search;
