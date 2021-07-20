// /* eslint-disable no-undef */
// /* eslint-disable import/extensions */
// /* eslint-disable import/no-unresolved */
// /* eslint-disable camelcase */
// import { ApolloServer } from 'apollo-server';
// import ApolloService from './services/apollo-service';

// const server = (services: Array<ApolloService>) => {
//   let queryTypes = `
//     type Query {
//   `;

//   let querySubtypes = `
//   `;

//   const resolverTypes: any = {
//     Query: {
//     },
//   };

//   services.forEach((service) => {
//     const { types, resolvers } = service;

//     const { rootTypes, subTypes } = types;
//     const { rootQueries, subQueries } = resolvers;

//     queryTypes += ` ${rootTypes} `;
//     querySubtypes += `${subTypes}`;

//     Object.entries(rootQueries).forEach((rootQuery) => {
//       const [query, resolver] = rootQuery;
//       resolverTypes.Query[query] = resolver;
//     });

//     Object.entries(subQueries).forEach((subQuery) => {
//       const [query, resolver] = subQuery;
//       resolverTypes[query] = resolver;
//     });
//   });

//   queryTypes += ' }';
//   const typeDefs = queryTypes + querySubtypes;

//   return new ApolloServer({
//     typeDefs,
//     resolvers: resolverTypes,
//   });
// };

// export default server;
