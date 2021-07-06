/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import server from '.';

server
  .listen()
  .then(({ url }) => {
    console.log(`server running on ${url}`);
  });
