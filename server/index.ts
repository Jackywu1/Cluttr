/* eslint-disable no-console */
import express from 'express';

import router from './controller/router';
import authenticator from './authentication';

const server = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // authenticate user

  app.use(router());

  return app;
};

export default server;
