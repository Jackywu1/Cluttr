import server from './index';

const PORT = process.env.PORT || 3000;

const app = server();

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
