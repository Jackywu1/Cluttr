/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import axios, { AxiosRequestConfig } from 'axios';
import querystring from 'querystring';

import Options from '../options';

const userTweets = async (
  { userid }: { userid: string },
  options: Options | undefined,
  callback: (err: null | Error, data: any | null) => void
): Promise<void> => {
  try {
    const query = querystring.stringify({
      user_id: userid,
    });

    const requestOptions: AxiosRequestConfig = {
      url: `https://api.twitter.com/1.1/statuses/user_timeline.json?${query}`,
      headers: {
        'User-Agent': 'v2TweetLookupJS',
        Authorization: `Bearer ${process.env.twitter_bearer_token}`,
      },
    };

    if (options?.cache?.get) {
      const cachedData = await options!.cache!.get!(`id:${userid}`);

      if (cachedData) {
        callback(null, JSON.parse(cachedData));
      } else {
        const { data } = await axios(requestOptions);
        await options!.cache!.add!(`id:${userid}`, 60, JSON.stringify(data));

        callback(null, data);
      }
    } else {
      const { data } = await axios(requestOptions);
      if (options?.cache?.add) {
        await options!.cache!.add!(`id:${userid}`, 60, JSON.stringify(data));
      }

      callback(null, data);
    }
  } catch (err) {
    callback(err, null);
  }
};

export default userTweets;
