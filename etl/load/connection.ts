/* eslint-disable no-console */
import { RedisGraph } from 'redis-modules-sdk';

const client = new RedisGraph({
  host: 'redisGraph',
  port: 6379,
});

(async () => {
  try {
    await client.connect();
  } catch (err) {
    console.log(err);
  }
})();

export default client;
