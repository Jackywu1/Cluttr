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
    return response.data as Promise<Tweet>;
  } catch (err) {
    return err;
  }
};

export default tweets;
