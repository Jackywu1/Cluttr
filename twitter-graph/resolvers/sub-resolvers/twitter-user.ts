import TwitterUser from '../../interfaces/twitter-user';
import TwitterProfileStats from '../../interfaces/twitter-profile-stats';

const id = (currentUser: TwitterUser): string => currentUser.id;
const name = (currentUser: TwitterUser): string => currentUser.name;
const user_handle = (currentUser: TwitterUser): string => currentUser.user_handle;
const profile_stats = (currentUser: TwitterUser): TwitterProfileStats => currentUser.profile_stats;

export default {
  id,
  name,
  user_handle,
  profile_stats,
};
