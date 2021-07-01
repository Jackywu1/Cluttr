/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express, { Request, Response, NextFunction } from 'express';

import verify from './login/verify';
import auth from './login';
import routes from './routes';

const router = () => {
  const app = express.Router();

  // check authorization
  // app.use('/spotify', (req: Request, res: Response, next: NextFunction) => verify(req, res, next));

  // authentication / authorization
  app.get('/spotify/login', (req: Request, res: Response) => res.redirect(200, '/spotify/authenticate'));
  app.get('/spotify/authenticate', (req: Request, res: Response) => auth.authenticate(req, res));
  app.get('/spotify/authorize', (req: Request, res: Response, next: NextFunction) => auth.authorize(req, res, next));

  // API routes
  app.get('/spotify/playlist', routes.playlist);
  app.get('/spotify/playlist/info', routes.playlistInfo);

  return app;
};

export default router;
