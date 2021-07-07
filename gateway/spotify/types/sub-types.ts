const subTypes = `
  type Playlist {
    id: String!
    name: String!
    owner: Owner!
  }

  type PlaylistInfo {
    track: Track!
  }

  type Owner {
    display_name: String!
    external_urls: Url
    id: String!
  }

  type Url {
    spotify: String!
  }

  type Track {
    name: String!
    id: String!
    artists: [Artist!]!
    external_urls: Url!
  }

  type Artist {
    id: String!
    name: String!
    type: String!
    uri: String!
    external_urls: Url!
  }
`;

export default subTypes;
