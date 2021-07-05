/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import https from 'https';
import express from 'express';
import fs from 'fs';

import spotify from '.';

const PORT = process.env.PORT || 1000;

const server = express();
const app = spotify();

server.use(app);

const httpsOptions = {
  key: fs.readFileSync('./config/key.pem'),
  cert: fs.readFileSync('./config/cert.pem'),
};

server.listen(PORT, () => console.log(`Spotify service running on port ${PORT}`));
// https.createServer(httpsOptions, server).listen(PORT, () => console.log(`Spotify service running on port ${PORT}`));
