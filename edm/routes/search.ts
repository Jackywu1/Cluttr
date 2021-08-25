/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import axios from 'axios';
import querystring from 'querystring';

import config from '../config/edm.config';
import cache from '../cache';

interface Query {
  client: string;
  [key: string]: string;
}

export default async (req: Request, res: Response) => {
  try {
    const { client } = config;
    const queries: Query = { client };

    const [key, value] = Object.entries(req.body)[0];
    const cachedData = await cache.get(`${key}:${value}`);

    if (cachedData) {
      res.status(200).send(JSON.parse(cachedData));
    }

    queries[key as unknown as string] = value as unknown as string;

    const response = await axios.get(`https://edmtrain.com/api/events?${querystring.stringify(queries)}`);
    const { data } = response.data;

    cache.add(`${key}:${value}`, 10, JSON.stringify(data));
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send(err);
  }
};
