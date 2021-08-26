/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  ApolloClient,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

import links from './links';

const client = (): ApolloClient<NormalizedCacheObject> => {
  const { http, parse } = links;

  const user = new ApolloClient({
    link: from([parse, http]),
    cache: new InMemoryCache(),
  });

  return user;
};

export default client;
