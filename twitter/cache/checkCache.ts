import cache from '.';

const checkCache = async <T>(key: string): Promise<T | undefined> => {
  try {
    const data = await cache.get(key);

    if (data) {
      return JSON.parse(data) as Promise<T>;
    } else {
      return undefined;
    }
  } catch (err) {
    return undefined;
  }
};

export default checkCache;
