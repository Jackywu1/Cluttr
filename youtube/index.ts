/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
require('dotenv').config();

import express, { Router, Request, Response } from 'express';
import querystring from 'querystring';

import auth from './login';
import routes from './routes';

import Options from './options';
import NormalizedCache from './cache/normalized-cache';

const server = (options: Options): Router => {
  const cache: NormalizedCache = options.cache;
  const expiration = parseInt(process.env.EXPIRATION as string) || 3600;

  const router: Router = express();

  // authentication / authorization
  router.get('/youtube/login', auth.authenticate);
  router.get('/youtube/authorize', async (req: Request, res: Response) => {
    const { code } = req.query;
    const accessToken = await auth.authorize(code as string);

    await cache.add(process.env.client_id as string, expiration, accessToken as string);
    const redirect = querystring.stringify({
      term: process.env.default_search as string,
    });

    res.status(200).redirect(`/youtube/search?${redirect}`);
  });

  // API routes
  router.get('/youtube/search', (req: Request, res: Response) => {
    routes.search(
      req.query as { term: string },
      options as Options,
      (err: Error | null, data: any | null): void => { err ? res.status(400).send(err) : res.status(200).send(data); }
    );
  });

  return router;
};

export default server;
