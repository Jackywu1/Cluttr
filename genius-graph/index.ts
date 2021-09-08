/* eslint-disable import/prefer-default-export */
import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

import { schema } from './schema';
const { typeDefs, resolvers } = schema;

export const buildService = () => new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers,
    },
  ]),
});
