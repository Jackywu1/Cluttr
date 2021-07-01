# Cluttr API

## Spotify

#### Get all user playlists

```http
  GET /spotify/playlist
```

Retrieves a list of the current users playlists

#### Request

```
curl 
-X "GET" "/spotify/playlist"
-H "Content-Type: application/json"
-H "Authorization: Bearer my_token"
```

#### Response

```
[
    {
        "collaborative": false,
        "description": "",
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/12pRALs7Yz77hnLPlMapqh"
        },
        "href": "https://api.spotify.com/v1/playlists/12pRALs7Yz77hnLPlMapqh",
        "id": "12pRALs7Yz77hnLPlMapqh",
        "images": [
            {
                "height": 640,
                "url": "https://mosaic.scdn.co/640/ab67616d0000b2730fa595e787b0664fb8654db8ab67616d0000b2738c2877b422fdee55ad880eadab67616d0000b273c789f1ab2e94ca42d365dffbab67616d0000b273ef67b5f76eacede43f847b57",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://mosaic.scdn.co/300/ab67616d0000b2730fa595e787b0664fb8654db8ab67616d0000b2738c2877b422fdee55ad880eadab67616d0000b273c789f1ab2e94ca42d365dffbab67616d0000b273ef67b5f76eacede43f847b57",
                "width": 300
            },
            {
                "height": 60,
                "url": "https://mosaic.scdn.co/60/ab67616d0000b2730fa595e787b0664fb8654db8ab67616d0000b2738c2877b422fdee55ad880eadab67616d0000b273c789f1ab2e94ca42d365dffbab67616d0000b273ef67b5f76eacede43f847b57",
                "width": 60
            }
        ],
        "name": "EDM but only slightly",
        "owner": {
            "display_name": "Jacky Wu",
            "external_urls": {
                "spotify": "https://open.spotify.com/user/22pa2mktupfcvevio3ixpq5oq"
            },
            "href": "https://api.spotify.com/v1/users/22pa2mktupfcvevio3ixpq5oq",
            "id": "22pa2mktupfcvevio3ixpq5oq",
            "type": "user",
            "uri": "spotify:user:22pa2mktupfcvevio3ixpq5oq"
        },
        "primary_color": null,
        "public": true,
        "snapshot_id": "NiwwNWRhMGNkZTYxZjNiZTUxNDQxODg3NDRhYTZkOGYzYjI3ZDY4NGRk",
        "tracks": {
            "href": "https://api.spotify.com/v1/playlists/12pRALs7Yz77hnLPlMapqh/tracks",
            "total": 5
        },
        "type": "playlist",
        "uri": "spotify:playlist:12pRALs7Yz77hnLPlMapqh"
    },
    ...
]
```
