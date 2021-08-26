/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import axios from 'axios';

import TwitterProfileStats from '../../interfaces/twitter-user';

const twitterUser = async (_: any, { user }: { user: string }): Promise<TwitterProfileStats> => {
  try {
    // const username = 'illenium';
    // const response = await axios.get(`http://127.0.0.1:2000/twitter/${username}`);
    const response = await axios.get(`http://twitter:2000/twitter/${user}`);

    response.data.user_handle = response.data.username;
    response.data.profile_stats = response.data.public_metrics;

    return response.data as Promise<TwitterProfileStats>;
  } catch (err) {
    return err;
  }
};

export default twitterUser;
