/* eslint-disable no-unused-vars */
import redis, { RedisClient } from 'redis';

const connection = ({
  url
}: {
  url: string
} = {
  url: 'redis://youtubeCache:6379'
}): RedisClient => redis.createClient({
  url,
});

export default connection;
