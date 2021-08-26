/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Router, Request, Response } from 'express';

import routes from './routes';
import Options from './options';

const server = (options?: Options): Router => {
  const PORT = process.env.PORT || 2000;

  const router = Router();

  router.get('/twitter/tweets/:userid', (req: Request, res: Response) => {
    const callback = (err: Error | null, data: any | null) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    }

    routes.userTweets(
      req.params as { userid: string },
      options,
      callback,
    );
  });

  router.get('/twitter/:user', routes.userProfile);

  return router;
};

export default server;
