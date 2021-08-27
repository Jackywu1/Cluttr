/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import axios from 'axios';

import TwitterUser from '../../interfaces/twitter-user';
import TwitterProfileStats from '../../interfaces/twitter-profile-stats';

const twitterUser = async (_: any, { user }: { user: string }): Promise<TwitterUser> => {
  try {
    // const username = 'illenium';
    // const response = await axios.get(`http://127.0.0.1:2000/twitter/${username}`);
    const response = await axios.get(`http://twitter:2000/twitter/${user}`);

    const { data } = response.data;

    data.user_handle = data.username;
    data.profile_stats = data.public_metrics as TwitterProfileStats;

    return data as Promise<TwitterUser>;
  } catch (err) {
    return err;
  }
};

export default twitterUser;
