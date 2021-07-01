/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import axios from 'axios';

import twitter from '../../config/twitter.config';

const {
  bearer_token,
} = twitter;

const userTweets = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await axios({
      url: `https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=${id}`,
      headers: {
        'User-Agent': 'v2TweetLookupJS',
        Authorization: `Bearer ${bearer_token}`,
      },
    });

    const { data } = response;
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send(err);
  }
};

export default userTweets;
