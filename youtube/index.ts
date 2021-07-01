/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express, { Request, Response, NextFunction } from 'express';

import auth from './login';
import routes from './routes';

const router = () => {
  const app = express.Router();

  // check authorization

  // authentication / authorization
  app.get('/youtube/login', (req: Request, res: Response) => res.redirect(200, '/youtube/authenticate'));
  app.get('/youtube/authenticate', (req: Request, res: Response) => auth.authenticate(req, res));
  app.get('/youtube/authorize', (req: Request, res: Response) => auth.authorize(req, res));

  // API routes
  app.get('/youtube/video', routes.search);

  return app;
};

export default router;
