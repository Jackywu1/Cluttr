import { buildService } from '.';

const PORT: number = parseInt(process.env.PORT as string) || 5337;

(async () => {
  try {
    await buildService().listen(PORT);
    console.log(`server running on port ${PORT}`);
  } catch (err) {
    console.log('error:', err);
  }
})();
