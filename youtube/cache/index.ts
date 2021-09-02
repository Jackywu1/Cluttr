/* eslint-disable no-unused-vars */
import { promisify } from 'util';

import { connection } from './connection';
import { NormalizedCache } from './normalized-cache';

export const cache = (): NormalizedCache => {
  const client = connection();
  const cacheInstance: NormalizedCache = {
    add: promisify(client.setex).bind(client),
    get: promisify(client.get).bind(client),
  };

  return cacheInstance;
};
