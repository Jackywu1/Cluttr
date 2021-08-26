/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Router, Request, Response } from 'express';

import routes from './routes';
import NormalizedCache from './cache/normalized-cache';
// import cache from './cache';

const server = (
  cache: NormalizedCache): Router => {
  const router = Router();

  const PORT = process.env.PORT || 2000;

  router.get('/twitter/tweets/:userid', (req: Request, res: Response) => {
    routes.userTweets(
      req.params as { userid: string },
      cache,
      (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });
  router.get('/twitter/:user', routes.userProfile);

  return router;

  // proxy.use(router);

  // return () => proxy.listen(PORT, () => console.log(`Twitter service running on port ${PORT}`));
};

export default server;
