/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

import schema from './schema';

const { typeDefs, resolvers } = schema;

const service = () => new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers,
    },
  ]),
  context: ({ req }) => {

  },
});

export default service;
