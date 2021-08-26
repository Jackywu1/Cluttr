/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import axios from 'axios';
import querystring from 'querystring';

import youtube from '../config/youtube.config';
import cache from '../cache';

const {
  client_id, client_secret, redirect_uri,
} = youtube;

const EXPIRATION = parseInt(process.env.EXPIRATION!, 10) || 3600;

const authorize = async (req: Request, res: Response) => {
  try {
    const { code } = req.query;

    const query = querystring.stringify({
      client_id,
      client_secret,
      code: code as string,
      grant_type: 'authorization_code',
      redirect_uri,
    });

    const response = await axios({
      url: `https://oauth2.googleapis.com/token?${query}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token } = response.data;
    cache.add(client_id, EXPIRATION as number, access_token);

    const redirect = querystring.stringify({
      term: youtube.default_search,
    });

    res.redirect(200, `/youtube/search?${redirect}`);
  } catch (err) {
    res.status(500).send(err);
  }
};

export default authorize;
