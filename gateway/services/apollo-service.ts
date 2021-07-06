/* eslint-disable no-unused-vars */
interface Types {
  rootTypes: string;
  subTypes: string;
}

interface ResolverMethod {
  [key: string]: <T>(t?: T) => T | Promise<any>;
}

interface Resolvers {
  rootQueries: any;
  subQueries: any;
}

interface ApolloService {
  types: Types;
  resolvers: Resolvers;
}

export default ApolloService;
