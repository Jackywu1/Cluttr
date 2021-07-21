/* eslint-disable no-unused-vars */
import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient({
  url: 'redis://youtubeCache:6379',
  // url: 'redis://127.0.0.1:6379',
});

const cache = {
  add: client.setex.bind(client),
  get: promisify(client.get).bind(client),
};

export default cache;
