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

const userTweets = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cachedData = await cache.get(`id:${id}`);

    if (cachedData) {
      console.log('from cache');
      res.status(200).send(JSON.parse(cachedData));
    } else {
      console.log('from api');
      const query = querystring.stringify({
        user_id: id,
      });

      const response = await axios({
        url: `https://api.twitter.com/1.1/statuses/user_timeline.json?${query}`,
        headers: {
          'User-Agent': 'v2TweetLookupJS',
          Authorization: `Bearer ${bearer_token}`,
        },
      });

      const { data } = response;
      cache.add(`id:${id}`, 60, JSON.stringify(data));

      res.status(200).send(data);
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

export default userTweets;
