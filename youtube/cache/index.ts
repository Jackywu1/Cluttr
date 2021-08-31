/* eslint-disable no-unused-vars */
import { promisify } from 'util';

import connection from './connection';
import NormalizedCache from './normalized-cache';

const createCache = (): NormalizedCache => {
  const client = connection();
  const cache: NormalizedCache = {
    add: promisify(client.setex).bind(client),
    get: promisify(client.get).bind(client),
  };

  return cache;
}


export default createCache;
