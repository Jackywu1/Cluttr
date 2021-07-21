const subTypes = `
  type SearchResult {
    publishedAt: String!
    channelId: String!
    title: String!
    description: String!
    thumbnails: Thumbnails!
  }

  type Thumbnails {
    default: ThumbnailUrl!
    medium: ThumbnailUrl!
    high: ThumbnailUrl!
  }

  type ThumbnailUrl {
    url: String!
  }
`;

export default subTypes;
