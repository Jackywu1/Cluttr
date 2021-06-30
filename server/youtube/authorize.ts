/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import axios from 'axios';
import querystring from 'querystring';

import youtube from '../../config/youtube.config';
import cache from './cache';

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
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token } = response.data;
    cache.add('youtube access token', EXPIRATION as number, access_token);

    res.redirect(200, '/home');
  } catch (err) {
    res.status(500).send(err);
  }
};

export default authorize;
