import axios from 'axios';

const twitterUser = async () => {
  try {
    const username = 'illenium';
    // const response = await axios.get(`http://127.0.0.1:2000/twitter/${username}`);
    const response = await axios.get(`http://twitter:2000/twitter/${username}`);

    response.data.user_handle = response.data.username;
    response.data.profile_stats = response.data.public_metrics;

    return response.data;
  } catch (err) {
    return err;
  }
};

export default twitterUser;