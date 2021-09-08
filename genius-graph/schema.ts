import { gql } from 'apollo-server';

import { rootTypes, subTypes } from './typeDefs';
import { rootResolvers, subResolvers } from './resolvers';

let queryTypes = `
  type Query {
`;

let querySubtypes = `
`;

const resolverTypes: any = {
  Query: {},
};

queryTypes += `${rootTypes}`;
querySubtypes += `${subTypes}`;
queryTypes += ' }';

const typeDefs = gql(queryTypes + querySubtypes);

Object.entries(rootResolvers).forEach((rootResolver) => {
  const [query, resolver] = rootResolver;
  resolverTypes.Query[query] = resolver;
});

Object.entries(subResolvers).forEach((subResolver) => {
  const [query, resolver] = subResolver;
  resolverTypes[query] = resolver;
});

export const schema = {
  typeDefs,
  resolvers: resolverTypes,
};
