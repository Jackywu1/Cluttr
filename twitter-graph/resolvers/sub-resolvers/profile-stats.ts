import TwitterProfileStats from '../../interfaces/twitter-profile-stats';

const followers_count = (currentProfile: TwitterProfileStats): number => currentProfile.followers_count;
const following_count = (currentProfile: TwitterProfileStats): number => currentProfile.following_count;
const tweet_count = (currentProfile: TwitterProfileStats): number => currentProfile.tweet_count;
const listed_count = (currentProfile: TwitterProfileStats): number => currentProfile.listed_count;

export default {
  followers_count,
  following_count,
  tweet_count,
  listed_count,
};
