/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
require('dotenv').config();

import express, { Router, Request, Response } from 'express';

import auth from './login';
import routes from './routes';

import Options from './options';
import NormalizedCache from './cache/normalized-cache';

const server = (options: Options): Router => {
  const cache: NormalizedCache = options.cache;
  const expiration = parseInt(process.env.EXPIRATION as string) || 3600;

  const router: Router = express();

  // authentication / authorization
  router.get('/spotify/login', auth.authenticate);
  router.get('/spotify/authorize', async (req: Request, res: Response) => {
    const { code } = req.query;
    const accessToken = await auth.authorize(code as string);

    await cache.add(process.env.client_id as string, expiration, accessToken as string);
    res.status(200).redirect('/spotify/playlist');
  });

  // API routes
  router.get('/spotify/playlist', (req: Request, res: Response) => {
    routes.playlist(
      options as Options,
      (err: Error | null, data: any | null) => { err ? res.status(400).send(err) : res.status(200).send(data); }
    );
  });

  router.get('/spotify/playlist/info', (req: Request, res: Response) => {
    routes.playlistInfo(
      req.query as { id: string },
      options as Options,
      (err: Error | null, data: any | null) => { err ? res.status(400).send(err) : res.status(200).send(data); }
    );
  });

  return router;
};

export default server;
