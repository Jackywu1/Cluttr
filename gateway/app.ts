/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import app from '.';

const PORT = 4000;

(async () => {
  app().listen(PORT);
  console.log(`gateway running on port ${PORT}`);
})();
