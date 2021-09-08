export const subTypes = `
  type SearchResult {
    type: String!
    result: Result!
  }

  type Result {
    id: Int!
    url: String!
    song_art_image_url: String!
    title_with_featured: String!
    primary_artist: Artist!
  }

  type Artist {
    id: Int!
    name: String!
    url: String!
  }
`;
