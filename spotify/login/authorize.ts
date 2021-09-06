/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-buffer-constructor */
/* eslint-disable camelcase */
import axios from 'axios';
import querystring from 'querystring';

export const authorize = async (code: string): Promise<string | Error> => {
  try {
    const data = querystring.stringify({
      grant_type: 'authorization_code',
      code: code as string,
      redirect_uri: 'http://127.0.0.1:1000/spotify/authorize',
    });

    const { data: response } = await axios({
      url: 'https://accounts.spotify.com/api/token',
      method: 'post',
      data,
      headers: {
        Authorization: `Basic ${Buffer.from(`${process.env.client_id as string}:${process.env.client_secret as string}`).toString('base64')}`,
      },
    });

    return response.access_token as Promise<string>;
  } catch (err) {
    return new Promise((_, reject) => reject(new Error(err as string)));
  }
}
