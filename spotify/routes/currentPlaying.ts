import axios from 'axios';
import { Options } from '../options';

export const currentPlaying = async (
  { cache }: Options,
  callback: (err: Error | null, data: any | null) => void,
) => {
  try {
    const accessToken = await cache.get(process.env.client_id as string);

    const { data } = await axios({
      url: `https://api.spotify.com/v1/me/player/currently-playing`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    callback(null, data);
  } catch (err) {
    callback(new Error(err), null);
  }
};
