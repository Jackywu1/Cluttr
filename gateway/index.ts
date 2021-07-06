/* eslint-disable camelcase */
import { ApolloServer } from 'apollo-server';
import axios from 'axios';

const typeDefs = `
  type Query {
    spotifyPlaylist: [Playlist!]!
  }

  type Playlist {
    id: String!
    name: String!
    owner: Owner!
  }

  type Owner {
    display_name: String!
    external_url: Url
    id: String!
  }

  type Url {
    spotify: String!
  }
`;

interface Url {
  spotify: string;
}

interface Owner {
  display_name: string;
  external_url: URL;
  id: string;
}

interface Playlist {
  id: string;
  name: string;
  owner: Owner;
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
    owner: (playlist: Playlist): Owner => playlist.owner,
  },

  Owner: {
    display_name: (owner: Owner): string => owner.display_name,
    id: (owner: Owner): string => owner.id,
    external_url: (owner: Owner): URL => owner.external_url,
  },

  Url: {
    spotify: (url: Url) => url.spotify,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
