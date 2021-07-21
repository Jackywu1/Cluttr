/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import TwitterUser from './twitter-user';

interface Tweet {
  id: string;
  created_at: string;
  text: string;
  entities: TwitterUser;
}

export default Tweet;
