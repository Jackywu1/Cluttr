/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express, { Request, Response, NextFunction } from 'express';

import spotify from './config/spotify.config';
import cache from './cache';
import verify from './login/verify';
import auth from './login';
import routes from './routes';

const router = () => {
  const app = express.Router();

  // check authorization
  // app.use('/spotify', verify);

  // authentication / authorization
  app.get('/spotify/login', (req: Request, res: Response) => res.redirect(200, '/spotify/authenticate'));
  app.get('/spotify/authenticate', auth.authenticate);
  app.get('/spotify/authorize', auth.authorize);

  // API routes
  app.get('/spotify/playlist', routes.playlist);
  app.get('/spotify/playlist/info', routes.playlistInfo);

  return app;
};

export default router;
