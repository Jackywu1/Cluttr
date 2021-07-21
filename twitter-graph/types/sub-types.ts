const subTypes = `
  type Tweet {
    id: String!
    created_at: String!
    text: String!
  }

  type TwitterUser {
    id: String!
    name: String!
    user_handle: String!
    profile_stats: TwitterProfileStats!
  }

  type TwitterProfileStats {
    followers_count: Int!
    following_count: Int!
    tweet_count: Int!
    listed_count: Int!
  }
`;

// entities: [TwitterUser]

export default subTypes;
