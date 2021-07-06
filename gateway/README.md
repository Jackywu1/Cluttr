# API Gateway

## Introduction

The API gateway consolidates and integrates the media microservices. The Gateway is implemented using GraphQL, allowing users to make a single query to multiple services.

## Schema

```
{
    "data": {
        "spotifyPlaylist": [
            {
                "id": String!,
                "name": String!,
                "owner": {
                    "display_name": String!,
                    "id": String!,
                    "external_urls": {
                        spotify: String!
                    }
                }
            },
            ...
        ],
    }
}
```

#### Example Request

{
  spotifyPlaylist {
    id
    name
    owner {
      display_name
      id
      external_url {
        spotify
      }
    }
  }
}

#### Example Response

```
{
    "data": {
        "spotifyPlaylist": [
            {
                "id": "12pRALs7Yz77hnLPlMapqh",
                "name": "EDM but only slightly",
                "owner": {
                    "display_name": "Jacky Wu",
                    "id": "22pa2mktupfcvevio3ixpq5oq",
                    "external_url": {
                        spotify: "https://open.spotify.com/user/22pa2mktupfcvevio3ixpq5oq"
                    }
                }
            },
            ...
        ]
    }
}
```