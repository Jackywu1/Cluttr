import fetch from 'cross-fetch';
import { HttpLink } from '@apollo/client';

export default (): HttpLink => new HttpLink({
  uri: 'http://gateway:8000',
  fetch,
});
