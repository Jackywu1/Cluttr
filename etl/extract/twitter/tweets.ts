import { request, gql } from 'graphql-request';

const tweets = async () => {
  try {
    const query = gql`
      query {
        tweets {
          id
          created_at
          text
        }
      }
    `;

    const data = await request('http://gateway:4000/', query);
    return data;
  } catch (err) {
    return err;
  }
};

export default tweets;
