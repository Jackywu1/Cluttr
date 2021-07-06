const subTypes = `
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

export default subTypes;
