/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';

import routes from './routes';

const router = () => {
  const app = express.Router();

  app.get('/twitter/tweets/:id', routes.userTweets);

  return app;
};

export default router;
