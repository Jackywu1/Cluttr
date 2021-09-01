/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import axios from 'axios';
import querystring from 'querystring';

import Options from '../options';

const EXPIRATION = parseInt(process.env.EXPIRATION!, 10) || 3600;

// const authorize = async (req: Request, res: Response) => {
//   try {
//     const { code } = req.query;

//     const query = querystring.stringify({
//       client_id,
//       client_secret,
//       code: code as string,
//       grant_type: 'authorization_code',
//       redirect_uri,
//     });

//     const response = await axios({
//       url: `https://oauth2.googleapis.com/token?${query}`,
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     });

//     const { access_token } = response.data;
//     cache.add(client_id, EXPIRATION as number, access_token);

//     const redirect = querystring.stringify({
//       term: youtube.default_search,
//     });

//     res.redirect(200, `/youtube/search?${redirect}`);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

const authorize = async (code: string): Promise<string | Error> => {
  try {
    const query = querystring.stringify({
      client_id: process.env.client_id as string,
      client_secret: process.env.client_secret as string,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: 'http://127.0.0.1:3000/youtube/authorize',
    });

    const { data } = await axios({
      url: `https://oauth2.googleapis.com/token?${query}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return data.access_token as Promise<string>;
  } catch (err) {
    return new Promise((_, reject) => reject(new Error(err)));
  }
};

export default authorize;
