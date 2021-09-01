/* eslint-disable no-unused-vars */
import { promisify } from 'util';

import NormalizedCache from './normalized-cache';
import connection from './connection';

const createCache = (): NormalizedCache => {
  const client = connection();
  const cache: NormalizedCache = {
    add: promisify(client.setex).bind(client),
    get: promisify(client.get).bind(client),
  };

  return cache;
};

export default createCache;
