/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: 'spotify',
      url: 'http://spotify-graph:1337',
    },
    {
      name: 'twitter',
      url: 'http://twitter-graph:2337',
    },
    {
      name: 'youtube',
      url: 'http://youtube-graph:3337',
    },
  ],
});

const buildServer = () => new ApolloServer({
  gateway,
  subscriptions: false,
});

export default buildServer;
