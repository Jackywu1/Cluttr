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
    const accessToken = await auth.authorize(req as Request, res as Response, options as Options);
    cache.add(process.env.client_id as string, expiration, accessToken as string);

    const redirect = querystring.stringify({
      term: process.env.default_search as string,
    });

    res.status(200).redirect(`/youtube/search?${redirect}`);
  });

  // API routes
  router.get('/youtube/search', routes.search);

  return router;
};

export default server;
