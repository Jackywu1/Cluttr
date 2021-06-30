/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';
import cache from './cache';

const router = () => {
  const auth = express.Router();

  // get data from cache
  // if exists, attach to response
  // else, use endpoints to get data as needed

  return auth;
};

export default router;
