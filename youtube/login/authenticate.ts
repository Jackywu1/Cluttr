/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import querystring from 'querystring';

const authenticate = (req: Request, res: Response): void => {
  const query = querystring.stringify({
    client_id: process.env.client_id as string,
    redirect_uri: 'http://127.0.0.1:3000/youtube/authorize',
    response_type: 'code',
    scope: 'https://www.googleapis.com/auth/youtube',
  });

  return res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${query}`);
};

export default authenticate;
