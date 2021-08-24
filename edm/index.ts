/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';

import routes from './routes';

export default () => {
  const app = express.Router();

  app.get('/edm/event', routes.eventName);

  return app;
};
