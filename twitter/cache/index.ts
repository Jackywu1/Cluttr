/* eslint-disable no-unused-vars */
import { promisify } from 'util';

import NormalizedCache from './normalized-cache';
import connection from './connection';
import checkCache from './checkCache';

const cache: NormalizedCache = {
  add: connection.setex.bind(connection),
  get: promisify(connection.get).bind(connection),
};

export default cache;
