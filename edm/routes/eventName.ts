/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import axios from 'axios';
import querystring from 'querystring';

import config from '../config/edm.config';

export default async (req: Request, res: Response) => {
  try {
    const { client } = config;
    const query = querystring.stringify({
      client,
      eventName: 'Beyond Wonderland',
    });

    const response = await axios.get(`https://edmtrain.com/api/events?${query}`);
    const { data } = response.data;
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send('not found');
  }
};
