import express from 'express';
import { genius } from '.';

import { createCache } from './cache';

const PORT = parseInt(process.env.PORT as string) || 5000;

const server = express();
server.use(genius({
  cache: createCache(),
}));

server.listen(PORT, () => console.log(`Genius service running on port ${PORT}`));
