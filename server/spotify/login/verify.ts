/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response, NextFunction } from 'express';
import cache from '../cache';

const verify = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.query;
    const accessCode = await cache.get(user as string);

    if (accessCode) {
      req.body.token = accessCode;
      next();
    } else {
      res.redirect(200, '/spotify/login');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export default verify;
