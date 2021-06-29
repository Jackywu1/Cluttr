/* eslint-disable import/no-unresolved */
/* eslint-disable no-buffer-constructor */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import axios from 'axios';
import querystring from 'querystring';

import spotify from '../../../config/spotify.config';

const {
  client_id,
  client_secret,
  redirect_uri,
} = spotify;

const authenticate = async (req: Request, res: Response) => {
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

    const { access_token, refresh_token } = response.data;
  } catch (err) {
    res.status(500).send(err);
  }
};

export default authenticate;

//   // authorize user
//   // returns access and refresh tokens
//   // redirects user to home page
//   authorize(req, res) {
//     const { code, state } = req.query;
//     const data = querystring.stringify({
//       grant_type: 'authorization_code',
//       code,
//       redirect_uri,
//     });

//     axios({
//       url: `https://accounts.spotify.com/api/token`,
//       method: `post`,
//       data,
//       headers: {
//         'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
//       },
//     })
//       .then(({ data }) => {
//         const { access_token, refresh_token } = data;

//         cache.setex(`spotify access token`, 3600, access_token);
//         cache.setex(`spotify refresh token`, 3600, refresh_token);

//         res.redirect(200, `/youtube/login`);
//       })
//       .catch((err) => {
//         res.send(err);
//       });
//   },
// };