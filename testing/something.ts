import { parse } from 'graphql';

const parsed = parse(
  `query Query {
    _service {
      sdl
    }
    tweets {
      id
      created_at
      text
    }
    twitterUser {
      id
      name
      user_handle
      profile_stats {
        followers_count
        following_count
        tweet_count
        listed_count
      }
    }
  }`
);

console.log(parsed);
// console.log(Object.keys(parsed.definitions[0]));

// Object.entries(parsed.definitions[0]).forEach((pair) => {
//   const [key, value] = pair;
//   // console.log();
//   // console.log(key);
//   // console.log(value);

//   if (value.selectionSet) console.log('found:', value.selectionSet);
// });

// // console.log(parsed.definitions[0].selectionSet);