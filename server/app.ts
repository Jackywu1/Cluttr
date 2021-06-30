/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import server from './index';
import services from './services';

const PORT = process.env.PORT || 1337;

const app = server(services);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
