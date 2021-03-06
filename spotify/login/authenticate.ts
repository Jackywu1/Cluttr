/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import querystring from 'querystring';

const scopes = 'user-read-currently-playing';

export const authenticate = (req: Request, res: Response): void => {
  const query = querystring.stringify({
    client_id: process.env.client_id as string,
    response_type: 'code',
    scope: encodeURIComponent(scopes),
    redirect_uri: 'http://127.0.0.1:1000/spotify/authorize',
    state: process.env.state as string,
    show_dialog: true,
  })

  return res.redirect(`https://accounts.spotify.com/authorize?${query}`);
};
