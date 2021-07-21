import Tweet from '../../interfaces/tweet';
import TwitterUser from '../../interfaces/twitter-user';

const id = (currentUser: Tweet): string => currentUser.id.toString();
const created_at = (currentUser: Tweet): string => currentUser.created_at;
const text = (currentUser: Tweet): string => currentUser.text;
const entities = (currentUser: Tweet): TwitterUser => {
  console.log('inside entities');
  return currentUser.entities;
};

export default {
  id,
  created_at,
  text,
  entities,
};
