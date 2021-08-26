/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ApolloLink } from '@apollo/client';
import { parse } from 'graphql';
import { print } from 'graphql/language/printer';

import cypher from './cypher';

const { GraphQLNormalizr } = require('../../lib/GraphQLNormalizr');

export default (): ApolloLink => new ApolloLink((operation, forward) => {
  const parsedQuery = parse(print(operation.query));

  return forward(operation).map((data) => {
    const { normalize } = new GraphQLNormalizr();
    const normalizedData = normalize(data);

    cypher(normalizedData);

    return data;
  });
});
