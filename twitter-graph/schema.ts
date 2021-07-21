/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// import { buildFederatedSchema } from '@apollo/federation';
// import { ApolloServer } from 'apollo-server';
import { gql } from 'apollo-server';

// import typeDefs from './types';
// import resolvers from './resolvers';
import types from './types';
import resolvers from './resolvers';

const { rootTypes, subTypes } = types;
const { rootQueries, subQueries } = resolvers;

let queryTypes = `
  type Query {
`;

let querySubtypes = `
`;

const resolverTypes: any = {
  Query: {},
};

queryTypes += ` ${rootTypes} `;
querySubtypes += `${subTypes}`;
queryTypes += ' }';

const typeDefs = gql(queryTypes + querySubtypes);

Object.entries(rootQueries).forEach((rootQuery) => {
  const [query, resolver] = rootQuery;
  resolverTypes.Query[query] = resolver;
});

Object.entries(subQueries).forEach((subQuery) => {
  const [query, resolver] = subQuery;
  resolverTypes[query] = resolver;
});

console.log('types', typeDefs);
console.log('resolvers', resolverTypes);

export default {
  typeDefs,
  resolvers: resolverTypes,
};
