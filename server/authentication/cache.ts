import redis from 'redis';

const cache = redis.createClient();

const add = <T>(key: string, expiration: number, value: T): void => {
  cache.setex(
    key,
    expiration,
    JSON.stringify(value),
  );
};

const get = <T>(key: string): Promise<T | Error> => (
  new Promise<T | Error>((resolve, reject) => {
    try {
      // cache.get(key, (err, data) => (err ? reject(err) : resolve(JSON.parse(data as string))));
      cache.get(key, (err, data) => {
        data ? resolve(JSON.parse(data as string)) : reject(err);
      });
    } catch (err) {
      reject(err);
    }
  })
);

add('test', 10, [1, 2, 3]);
get('testing').then((data) => console.log('found', data)).catch(err => console.log('error', typeof err));
get('test').then((data) => console.log('found', data)).catch(err => console.log('error', err));

export default {
  add,
  get,
};
