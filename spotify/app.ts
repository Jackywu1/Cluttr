/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import express from 'express';

import { spotify } from '.';
import { createCache } from './cache';

const PORT = process.env.PORT || 1000;

const server = express();
const app = spotify({
  cache: createCache(),
});

server.use(app);

server.listen(PORT, () => console.log(`Spotify service running on port ${PORT}`));
