/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
require('dotenv').config();

import express, { Router, Request, Response } from 'express';

import routes from './routes';
import Options from './options';

const server = (options?: Options): Router => {
  const PORT = process.env.PORT || 2000;

  const router: Router = express();

  router.get('/twitter/tweets/:userid', (req: Request, res: Response) => {
    routes.userTweets(
      req.params as { userid: string },
      options as Options,
      (err: Error | null, data: any | null) => {
        if (err) {
          res.status(420).send(err);
        } else {
          res.status(200).send(data);
        }
      },
    );
  });

  router.get('/twitter/:user', (req: Request, res: Response) => {
    const callback = (err: Error | null, data: any | null) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    };

    routes.userProfile(
      req.params as { user: string },
      options as Options,
      callback,
    );
  });

  return router;
};

export default server;
