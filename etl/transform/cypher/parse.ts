/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { node, relation, Query } from 'cypher-query-builder';

import twitter from '../../data/tweets';

const parse = () => {
  const { tweets } = twitter.data;

  return tweets.map((tweet) => {
    const { id, created_at, text } = tweet;

    // return new Query()
    //   .create([
    //     node('user', 'User', { id }),
    //     relation('out', '', 'Tweeted'),
    //     node('tweet', 'Tweet', { created_at, text }),
    //   ])
    //   .build();

    // return `CREATE (user:User { id: ${id} })-[tweeted:Tweeted]->(tweet:Tweet { created_at: ${created_at}, text: ${text} } )`;
    return `CREATE (user:User { id: ${id} })`;
  });
};

console.log(parse());

export default parse;
