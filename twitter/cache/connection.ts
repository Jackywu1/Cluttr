/* eslint-disable no-unused-vars */
import redis, { RedisClient } from 'redis';

const connection = (): RedisClient => redis.createClient({
  url: 'redis://twitterCache:6379',
});

export default connection;
