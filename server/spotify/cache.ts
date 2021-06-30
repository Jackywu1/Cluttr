import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient();

export default {
  add: client.setex.bind(client),
  get: promisify(client.get).bind(client),
};
