require('dotenv').config();

import express, { Router, Request, Response } from 'express';

import { authenticate, authorize } from './login';
import { search } from './routes';

import { Options } from './options';

const callback = (req: Request, res: Response) => (err: Error | null, data: any | null) => {
  err ? res.status(400).send(err) : res.status(200).send(data);
};

const expiration = parseInt(process.env.expiration as string) || 3600;

export const genius = (options: Options) => {
  const { cache } = options;
  const router: Router = express();

  router.get('/genius/login', authenticate);
  router.get('/genius/authorize', async (req: Request, res: Response) => {
    const { code } = req.query;
    const accessToken = await authorize(code as string) as string;

    await cache.add(process.env.client_id as string, expiration, accessToken);

    res.status(200).redirect('/genius/search?term=illenium');
  });

  router.get('/genius/current', (req: Request, res: Response) => {

  });

  router.get('/genius/search', async (req: Request, res: Response) => {
    const token = await cache.get(process.env.client_id as string);
    search(
      req.query as { term: string },
      options,
      callback(req, res),
    );
  });

  return router;
};
