/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import axios from 'axios';
import querystring from 'querystring';

const EXPIRATION = parseInt(process.env.EXPIRATION!, 10) || 3600;

export const authorize = async (code: string): Promise<string | Error> => {
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
