/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import axios from 'axios';
import Options from '../options';

const EXPIRATION: number = parseInt(process.env.EXPIRATION as string, 10) || 3600;

export const searchUser = async (
  { term }: { term: string },
  { cache }: Options,
  callback: (err: Error | null, data: any | null) => void,
): Promise<void> => {
  try {
    const { data } = await axios({
      url: `https://api.twitter.com/2/users/by/username/${term}`,
      headers: {
        'User-Agent': 'v2TweetLookupJS',
        Authorization: `Bearer ${process.env.bearer_token as string}`,
      },
    });

    await cache.add(term, EXPIRATION, JSON.stringify(data));
    callback(null, data);
  } catch (err) {
    callback(new Error(err), null);
  }
};
