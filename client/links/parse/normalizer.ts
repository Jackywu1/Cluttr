/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
declare const require: any;
declare const module: any;

declare module 'graphql-normalizr' {
  // export default function normalize(T: any): any;
  const normalize: (T: any) => any;
  export default normalize;
}

interface Config {
  idKey?: string,
  typeMap?: any,
  caching?: boolean,
  lists?: boolean,
  typenames?: boolean,
  plural?: boolean,
  casing?: string,
  useConnections?: boolean,
  typePointers?: boolean,
  exclude?: any,
}

const config: Config = {};

const { GraphQLNormalizr } = require('graphql-normalizr');

module.exports = new GraphQLNormalizr(config);
