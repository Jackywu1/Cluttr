// /* eslint-disable no-console */
// import { RedisGraph } from 'redis-modules-sdk';

// const client = new RedisGraph({
//   host: '172.24.0.7',
//   port: 6379,
// });

// (async () => {
//   try {
//     await client.connect();

//     const response = await client.query('socialMedia', 'MATCH (n) RETURN (n)');
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// })();

// export default client;
