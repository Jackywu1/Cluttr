/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import axios, { AxiosRequestConfig } from 'axios';
import querystring from 'querystring';

import twitter from '../config/twitter.config';
import cache from '../cache';
import Options from '../options';

const {
  bearer_token,
} = twitter;

const userProfile = async (
  { user }: { user: string },
  options: Options | undefined,
  callback: (err: null | Error, data: any | null) => void,
): Promise<void> => {
  try {
    const query = querystring.stringify({
      'user.fields': 'profile_image_url,public_metrics,pinned_tweet_id,description',
    });

    const requestOptions: AxiosRequestConfig = {
      url: `https://api.twitter.com/2/users/by/username/${user}?${query}`,
      headers: {
        'User-Agent': 'v2TweetLookupJS',
        Authorization: `Bearer ${bearer_token}`,
      },
    };

    if (options?.cache?.get) {
      const cachedData = await options!.cache!.get(`user:${user}`);

      if (cachedData) {
        callback(null, JSON.parse(cachedData));
      } else {
        const { data } = await axios(requestOptions);
        await options!.cache!.add(`user:${user}`, 60, JSON.stringify(data));

        callback(null, data);
      }
    } else {
      const { data } = await axios(requestOptions);

      if (options?.cache?.add) {
        await options!.cache!.add(`user:${user}`, 60, JSON.stringify(data));
      }

      callback(null, data);
    }
  } catch (err) {
    callback(new Error(err), null);
  }
}

export default userProfile;
