/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import buildServer from '.';

const PORT = 3337;

(async () => {
  await buildServer().listen(PORT);
  console.log(`server running on port ${PORT}`);
})();
