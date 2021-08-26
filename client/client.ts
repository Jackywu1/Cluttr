/* eslint-disable import/no-unresolved */
import { gql } from '@apollo/client';
import createClient from '.';

const client = createClient();

const query = gql`
  query Query {
    spotifyPlaylist {
      id
      name
      owner {
        display_name
        external_urls {
          spotify
        }
        id
      }
    }
    spotifyPlaylistInfo {
      track {
        name
        id
        artists {
          id
          name
          type
          uri
          external_urls {
            spotify
          }
        }
        external_urls {
          spotify
        }
      }
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
    tweets {
      id
      created_at
      text
    }
      searchVideo {
      snippet {
        publishedAt
        channelId
        title
        description
        thumbnails {
          default {
            url
          }
          medium {
            url
          }
          high {
            url
          }
        }
      }
    }
  }
`;

const iteration = async () => {
  const response = await client.query({
    query,
  });
};

setInterval(iteration, 1000);

// while (true) {
//   // const repeat = setTimeout(() => {
//   //   const { loading, error, data } = useQuery(testQuery);

//   //   if (loading) console.log('loading:', loading);
//   //   if (error) console.log('error:', error);
//   //   if (data) console.log('data:', data);
//   // }, 1000);
// }
