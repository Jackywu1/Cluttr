/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import querystring from 'querystring';

import youtube from '../../config/youtube.config';

const {
  client_id, redirect_uri,
} = youtube;

const authenticate = (req: Request, res: Response) => {
  const query = querystring.stringify({
    client_id,
    redirect_uri,
    response_type: 'code',
    scope: 'https://www.googleapis.com/auth/youtube',
  });

  res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${query}`);
};

export default authenticate;
