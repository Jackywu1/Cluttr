/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express, { Request, Response, NextFunction } from 'express';

// import verify from './login/verify';
import spotify from './index';

const router = () => {
  const app = express.Router();

  // check authorization
  // app.use('/spotify', verify);

  // authentication / authorization
  app.get('/spotify/login', (req: Request, res: Response) => res.redirect(200, '/spotify/authenticate'));
  app.get('/spotify/authenticate', (req: Request, res: Response) => spotify.authenticate(req, res));
  app.get('/spotify/authorize', (req: Request, res: Response, next: NextFunction) => spotify.authorize(req, res, next));

  // API routes
  app.get('/spotify/playlist', () => {});
  app.get('/spotify/playlist/info', () => {});

  return app;
};

export default router;
