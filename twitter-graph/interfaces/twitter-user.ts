import TwitterProfileStats from './twitter-profile-stats';

interface TwitterUser {
  id: string;
  name: string;
  user_handle: string;
  profile_stats: TwitterProfileStats;
};

export default TwitterUser;
