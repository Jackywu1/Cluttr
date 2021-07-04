/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

import cache from '../cache';
import twitter from '../config/twitter.config';

const {
  bearer_token,
} = twitter;

const EXPIRATION = parseInt(process.env.EXPIRATION as string, 10) || 3600;

const searchUserId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.params;

    const response = await axios({
      url: `https://api.twitter.com/2/users/by/username/${user}`,
      headers: {
        'User-Agent': 'v2TweetLookupJS',
        Authorization: `Bearer ${bearer_token}`,
      },
    });

    const { id } = response.data;
    cache.add(user, EXPIRATION, id);

    next();
  } catch (err) {
    res.status(404).send(err);
  }
};

export default searchUserId;
