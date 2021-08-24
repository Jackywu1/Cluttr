/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import express from 'express';

import edm from '.';

const PORT = process.env.PORT || 5000;

const server = express();
const app = edm();

server.use(app);

server.listen(PORT, () => console.log(`EDM service running on port ${PORT}`));
