/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import axios from 'axios';
import querystring from 'querystring';

import cache from '../cache';

const search = async (req: Request, res: Response) => {
  try {
    const { term } = req.query;

    const cacheData = await cache().get(term as string);
    if (cacheData) {
      res.status(200).send(JSON.parse(cacheData));
    } else {
      const query = querystring.stringify({
        part: 'snippet',
        q: term as string,
      });

      const accessToken = await cache().get(process.env.client_id as string);
      const response = await axios({
        url: `https://youtube.googleapis.com/youtube/v3/search?${query}}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { items } = response.data;
      cache().add(term as string, 60, JSON.stringify(items));

      res.status(200).send(items);
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

export default search;
