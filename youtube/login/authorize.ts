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

const authorize = async (req: Request, res: Response, { cache }: Options): Promise<string | Error> => {
  try {
    const { code } = req.query;
    const query = querystring.stringify({
      client_id: process.env.client_id as string,
      client_secret: process.env.client_secret as string,
      code: code as string,
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

    const { access_token: accessToken } = data;
    cache.add(process.env.client_id as string, EXPIRATION as number, accessToken);

    return accessToken as Promise<string>;

    // const redirect = querystring.stringify({
    //   term: process.env.default_search as string,
    // });

    // res.redirect(200, `/youtube/search?${redirect}`);
  } catch (err) {
    return new Promise((_, reject) => reject(new Error(err)));
    // res.status(500).send(err);
  }
};

export default authorize;
