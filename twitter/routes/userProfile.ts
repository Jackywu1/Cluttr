/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import axios from 'axios';
import querystring from 'querystring';

import twitter from '../config/twitter.config';
import cache from '../cache';

const {
  bearer_token,
} = twitter;

const userProfile = async (req: Request, res: Response) => {
  try {
    const { user } = req.params;
    const cachedData = await cache.get(`user:${user}`);

    if (cachedData) {
      res.status(200).send(JSON.parse(cachedData));
    } else {
      const query = querystring.stringify({
        'user.fields': 'profile_image_url,public_metrics,pinned_tweet_id,description',
      });

      const response = await axios.get(
        `https://api.twitter.com/2/users/by/username/${user}?${query}`,
        {
          headers: {
            'User-Agent': 'v2TweetLookupJS',
            Authorization: `Bearer ${bearer_token}`,
          },
        },
      );

      const { data } = response.data;
      cache.add(`user:${user}`, 60, JSON.stringify(data));

      res.status(200).send(data);
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

export default userProfile;
