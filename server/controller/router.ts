/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express, { Router } from 'express';

const router = (services: Array<Router>) => {
  const app = express.Router();

  services.forEach((service) => app.use(service));

  return app;
};

export default router;
