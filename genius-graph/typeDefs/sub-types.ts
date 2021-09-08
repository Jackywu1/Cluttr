export const subTypes = `
  type SearchResult {
    id: Number
    url: String!
    song_art_image_url: String!
    title_with_featured: String!
    artist: Artist!
  }

  type Artist {
    id: Number!
    name: String!
    url: String!
  }
`;
