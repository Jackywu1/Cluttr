/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import client from './connection';
// import extract from '../extract/twitter';

import parser from '../transform/cypher';

const generate = async () => {
  // try {
  //   // const data = await extract.tweets();
  //   // const response = await client.query('socialMedia', data);
  //   const queries: Array<Promise<any>> = [];

  //   parser.parse().forEach((tweet) => queries.push(
  //     client.query(
  //       'socialMedia',
  //       tweet,
  //     ),
  //   ));

  //   // const response = await client.query('socialMedia', parser.parse()[0]);
  //   const response = await Promise.all(queries);

  //   const data = await client.query('socialMedia', 'MATCH (n) RETURN n');
  //   console.log(data);

  //   return response;
  // } catch (err) {
  //   console.log(err);
  //   return err;
  // }
  try {
    const create = await client.query('socialMedia', 'CREATE (user:User { name: jack })');
    console.log(create);
    const response = await client.delete('socialMedia');

    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default generate;
