/* eslint-disable no-unused-vars */
import redis, { RedisClient } from 'redis';

export const connection = ({ url }: { url: string } = {
  url: 'redis://spotifyCache:6379'
}): RedisClient => redis.createClient({
  url,
});
