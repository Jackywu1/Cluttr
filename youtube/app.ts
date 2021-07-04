/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import express from 'express';

import youtube from '.';

const PORT = process.env.PORT || 3000;

const server = express();
const app = youtube();

server.use(app);

server.listen(PORT, () => console.log(`Youtube service running on port ${PORT}`));
