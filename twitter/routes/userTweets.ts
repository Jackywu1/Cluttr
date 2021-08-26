/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
// import { Request, Response } from 'express';
import axios from 'axios';
import querystring from 'querystring';

import twitter from '../config/twitter.config';
import NormalizedCache from '../cache/normalized-cache';
// import cache from '../cache';

const {
  bearer_token,
} = twitter;

const userTweets = async (
  { userid }: { userid: string },
  { add, get }: NormalizedCache,
  callback: (err: null | Error, data: any | null) => void) => {
  try {
    const cachedData = await get(`id:${userid}`);

    if (cachedData) {
      callback(null, JSON.parse(cachedData));
    } else {
      const query = querystring.stringify({
        user_id: userid,
      });

      const response = await axios({
        url: `https://api.twitter.com/1.1/statuses/user_timeline.json?${query}`,
        headers: {
          'User-Agent': 'v2TweetLookupJS',
          Authorization: `Bearer ${bearer_token}`,
        },
      });

      const { data } = response;
      add(`id:${userid}`, 60, JSON.stringify(data));

      callback(null, data);
    }
  } catch (err) {
    callback(new Error(err), null);
  }
};

// const userTweets = async (req: Request, res: Response) => {
//   try {
//     const { userid } = req.params;
//     const cachedData = await cache.get(`id:${userid}`);

//     if (cachedData) {
//       res.status(200).send(JSON.parse(cachedData));
//     } else {
//       const query = querystring.stringify({
//         user_id: userid,
//       });

//       const response = await axios({
//         url: `https://api.twitter.com/1.1/statuses/user_timeline.json?${query}`,
//         headers: {
//           'User-Agent': 'v2TweetLookupJS',
//           Authorization: `Bearer ${bearer_token}`,
//         },
//       });

//       const { data } = response;
//       cache.add(`id:${userid}`, 60, JSON.stringify(data));

//       res.status(200).send(data);
//     }
//   } catch (err) {
//     res.status(404).send(err);
//   }
// };

export default userTweets;
