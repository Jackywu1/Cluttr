/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import express from 'express';

import { youtube } from '.';
import { cache } from './cache';

const PORT = process.env.PORT || 3000;

const server = express();
const app = youtube({
  cache: cache(),
});

server.use(app);

server.listen(PORT, () => console.log(`Youtube service running on port ${PORT}`));
