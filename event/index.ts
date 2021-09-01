/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
require('dotenv').config();

import express, { Router, Request, Response } from 'express';

import routes from './routes';
import Options from './options';

export default (options: Options) => {
  const router: Router = express();

  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());

  // router.get('/event/events', routes.search);
  router.get('/event/artist', (req: Request, res: Response) => {
    const { id } = req.query;
    routes.search(
      id as string,
      options,
      (err: Error | null, data: any | null) => { err ? res.status(400).send(err) : res.status(200).send(data); },
    );
  });

  return router;
};
