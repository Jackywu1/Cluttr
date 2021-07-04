/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import express from 'express';

import twitter from '.';

const PORT = process.env.PORT || 2000;

const server = express();
const app = twitter();

server.use(app);

server.listen(PORT, () => console.log(`Twitter service running on port ${PORT}`));
