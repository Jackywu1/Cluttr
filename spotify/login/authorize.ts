/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-buffer-constructor */
/* eslint-disable camelcase */
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import querystring from 'querystring';

import spotify from '../../config/spotify.config';
import cache from '../cache';

const {
  client_id,
  client_secret,
  redirect_uri,
} = spotify;

const authorize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { code } = req.query;

    const data = querystring.stringify({
      grant_type: 'authorization_code',
      code: code as string,
      redirect_uri,
    });

    const response = await axios({
      url: 'https://accounts.spotify.com/api/token',
      method: 'post',
      data,
      headers: {
        Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
      },
    });

    const { access_token } = response.data;
    cache.add(client_id, 3600, access_token);

    res.redirect(200, '/spotify/playlist');
    // next();
  } catch (err) {
    res.status(500).send(err);
  }
};

export default authorize;
