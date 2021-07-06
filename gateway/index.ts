import { ApolloServer } from 'apollo-server';
import axios from 'axios';

const typeDefs = `
  type Query {
    spotifyPlaylist: [Playlist!]!
  }

  type Playlist {
    id: String!
    name: String!
  }
`;

interface Playlist {
  id: string;
  name: string;
}

const resolvers = {
  Query: {
    spotifyPlaylist: async (): Promise<Playlist | Error> => {
      try {
        const response = await axios.get('http://127.0.0.1:1000/spotify/playlist');
        return response.data;
      } catch (err) {
        return err;
      }
    },
  },

  Playlist: {
    id: (playlist: Playlist): string => playlist.id,
    name: (playlist: Playlist): string => playlist.name,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
