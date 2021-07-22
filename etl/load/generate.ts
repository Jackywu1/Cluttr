/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import client from './connection';
// import extract from '../extract/twitter';

import parser from '../transform/cypher';

const generate = async () => {
  try {
    // const data = await extract.tweets();
    // const response = await client.query('socialMedia', data);
    const response = await client.query('socialMedia', parser.parse()[0]);
    console.log(response);

    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default generate;
