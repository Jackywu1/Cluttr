import express from 'express';

import router from './router';

const server = express();
const spotify = router();

server.use(spotify);

const PORT = process.env.PORT || 1337;

server.listen(PORT, () => console.log(`spotify service running on port ${PORT}`));
