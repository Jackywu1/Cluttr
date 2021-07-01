/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import express, { Router } from 'express';

import router from './router';

const server = (services: Array<Router>) => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(router(services));

  return app;
};

export default server;
