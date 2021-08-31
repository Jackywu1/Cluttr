/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import querystring from 'querystring';

const authenticate = (req: Request, res: Response) => {
  const query = querystring.stringify({
    client_id: process.env.client_id as string,
    response_type: 'code',
    redirect_uri: 'http://127.0.0.1:1000/spotify/authorize',
    state: process.env.state as string,
    show_dialog: true,
  })

  return res.redirect(`https://accounts.spotify.com/authorize?${query}`);
};

export default authenticate;
