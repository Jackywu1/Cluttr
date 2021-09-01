/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import express from 'express';

import event from '.';
import cache from './cache';

const PORT: number = parseInt(process.env.PORT as string) || 4000;

const server = express();
const app = event({
  cache: cache(),
});

server.use(app);

server.listen(PORT, () => console.log(`EDM service running on port ${PORT}`));
