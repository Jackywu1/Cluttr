/* eslint-disable import/prefer-default-export */
import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

export const service = () => new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs: {},
      resolvers: {},
    },
  ]),
});
