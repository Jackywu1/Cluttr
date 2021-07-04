/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import axios from 'axios';
import querystring from 'querystring';

import twitter from '../config/twitter.config';

const {
  bearer_token,
} = twitter;

const userProfile = async (req: Request, res: Response) => {
  try {
    const { user } = req.params;
    const query = querystring.stringify({
      'user.fields': 'profile_image_url,public_metrics,pinned_tweet_id,description',
    });

    const response = await axios({
      url: `https://api.twitter.com/2/users/by/username/${user}?${query}`,
      headers: {
        'User-Agent': 'v2TweetLookupJS',
        Authorization: `Bearer ${bearer_token}`,
      },
    });

    const { data } = response.data;
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send(err);
  }
};

export default userProfile;
