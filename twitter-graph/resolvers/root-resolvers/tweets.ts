/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios';

import Tweet from '../../interfaces/tweet';

const tweets = async (_: any, { id }: { id: string }): Promise<Tweet> => {
  try {
    // const id = '2187489492';  // illenium's profile
    const response = await axios.get(`http://twitter:2000/twitter/tweets/${id}`);
    // const response = await axios.get(`http://127.0.0.1:2000/twitter/tweets/${id}`);

    // response.data.forEach((tweet: {
    //   entities: {
    //     user_mentions?: Array<{
    //       screen_name: string;
    //       user_handle: string;
    //     }>;
    //   }
    // }) => {
    //   const { entities } = tweet;
    //   const { user_mentions } = entities;

    //   if (user_mentions?.length) user_mentions?.forEach((user) => user.user_handle = user.screen_name);
    // });
    return response.data as Promise<Tweet>;
  } catch (err) {
    return err;
  }
};

export default tweets;
