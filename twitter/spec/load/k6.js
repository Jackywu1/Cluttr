import http from 'k6/http';
import { check } from 'k6';

// export const options = {
//   vus: 100,
//   duration: '10s',
// };

export default () => {
  const url = 'https://127.0.0.1';
  const PORT = 2000;

  const parameters = {
    user: 'illenium',
    userid: '2187489492',
  };

  const userTweets = http.post(`${url}:${PORT}/twitter/tweets/${parameters.userid}`);
  const userProfile = http.get(`${url}:${PORT}/twitter/${parameters.user}`);

  check(userTweets, {
    'valid status code': (res) => res.status === 200,
  });
};
