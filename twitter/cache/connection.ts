/* eslint-disable no-unused-vars */
import redis from 'redis';

const connection = redis.createClient({
  url: 'redis://twitterCache:6379',
});

export default connection;
