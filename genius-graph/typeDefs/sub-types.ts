export const subTypes = `
  type SearchResult {
    id: Int!
    url: String!
    song_art_image_url: String!
    title_with_featured: String!
    artist: Artist!
  }

  type Artist {
    id: Int!
    name: String!
    url: String!
  }
`;
