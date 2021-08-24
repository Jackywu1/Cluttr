/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';

import routes from './routes';

export default () => {
  const app = express.Router();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get('/edm/events', routes.search);

  return app;
};
