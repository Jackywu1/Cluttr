import express, { Request, Response } from 'express';

const router = () => {
  const app = express.Router();

  app.get('/login', (req: Request, res: Response) => res.redirect(200, '/spotify/login'));
  app.get('/login/spotify', (req: Request, res: Response) => {
    try {

    } catch (err) {

    }
  });

  return app;
};

export default router;
