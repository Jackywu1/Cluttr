import redis from 'redis';

const cache = redis.createClient();

export default cache;
