/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
require('dotenv').config();

import express, { Router, Request, Response } from 'express';

import { userProfile, userTweets, searchUser } from './routes';
import Options from './options';

const callback = (req: Request, res: Response) => (err: Error | null, data: any | null) => {
  err ? res.status(400).send(err) : res.status(200).send(data);
};

export const twitter = (options: Options = {}): Router => {
  const router = express();

  router.get('/twitter/tweets/:userid', (req: Request, res: Response) => {
    userTweets(
      req.params as { userid: string },
      options,
      callback(req, res),
    );
  });

  router.get('/twitter/search', (req: Request, res: Response) => {
    searchUser(
      req.query as { term: string },
      options,
      callback(req, res),
    );
  });

  router.get('/twitter/:user', (req: Request, res: Response) => {
    userProfile(
      req.params as { user: string },
      options,
      callback(req, res),
    );
  });

  return router;
};
