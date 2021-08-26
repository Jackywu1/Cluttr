const rootTypes = `
  spotifyPlaylist(name: String): [Playlist!]!
  spotifyPlaylistInfo(id: String!): [PlaylistInfo!]!
`;

export default rootTypes;
