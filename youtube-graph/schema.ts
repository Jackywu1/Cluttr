/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { gql } from 'apollo-server';

import types from './types';
import resolvers from './resolvers';

const { rootTypes, subTypes } = types;
const { rootResolvers, subResolvers } = resolvers;

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

Object.entries(rootResolvers).forEach((rootQuery) => {
  const [query, resolver] = rootQuery;
  resolverTypes.Query[query] = resolver;
});

Object.entries(subResolvers).forEach((subQuery) => {
  const [query, resolver] = subQuery;
  resolverTypes[query] = resolver;
});

export default {
  typeDefs,
  resolvers: resolverTypes,
};
