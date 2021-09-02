/* eslint-disable no-unused-vars */
import { promisify } from 'util';

import { NormalizedCache } from './normalized-cache';
import { connection } from './connection';

export const cache = () => {
  const client = connection();

  const cacheInstance: NormalizedCache = {
    add: promisify(client.setex).bind(client),
    get: promisify(client.get).bind(client),
  };

  return cacheInstance;
};
