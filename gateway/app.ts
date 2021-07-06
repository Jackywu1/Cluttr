/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import server from '.';
import services from './services';

server(services)
  .listen()
  .then(({ url }) => {
    console.log(`server running on ${url}`);
  });
