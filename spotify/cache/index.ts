/* eslint-disable no-unused-vars */
import redis from 'redis';
import { promisify } from 'util';

// const client = redis.createClient({
//   url: 'redis://spotifyCache:6379',
// });

const client = redis.createClient();

const cache = {
  add: client.setex.bind(client),
  get: promisify(client.get).bind(client),
};

export default cache;
