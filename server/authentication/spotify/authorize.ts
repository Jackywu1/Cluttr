/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import querystring from 'querystring';

import spotify from '../../../config/spotify.config';

const {
  client_id, redirect_uri, state,
} = spotify;

const authorize = (req: Request, res: Response) => {
  const query = querystring.stringify({
    client_id,
    response_type: 'code',
    redirect_uri,
    state,
    show_dialog: true,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${query}`);
};

export default authorize;
