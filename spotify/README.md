## Spotify Microservice Overview

#### This service follows the official Spotify Authorization Code Flow

<img width="823" alt="Screen Shot 2021-07-01 at 12 47 50 PM" src="https://user-images.githubusercontent.com/72538359/124181767-cca9ca00-da6a-11eb-842f-89212c8b9a81.png">

## Spotify Microservice API Reference

#### Get all user playlists

```http
GET /spotify/playlist
```

Retrieves a list of the current users playlists

#### Example Request

```
curl
-X "GET" "/spotify/playlist"
-H "Content-Type: application/json"
-H "Authorization: Bearer my_token"
```

#### Example Response

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

#### Get playlists info by id

```http
GET /spotify/playlist/info
```

#### Request

```
curl
-X "GET" "/spotify/playlist"
-d "id=12pRALs7Yz77hnLPlMapqh"
-H "Content-Type: application/json"
-H "Authorization: Bearer my_token"
```

#### Response

`Status: 200 OK`

```
[
    {
        "added_at": "2021-06-06T22:30:56Z",
        "added_by": {
            "external_urls": {
                "spotify": "https://open.spotify.com/user/22pa2mktupfcvevio3ixpq5oq"
            },
            "href": "https://api.spotify.com/v1/users/22pa2mktupfcvevio3ixpq5oq",
            "id": "22pa2mktupfcvevio3ixpq5oq",
            "type": "user",
            "uri": "spotify:user:22pa2mktupfcvevio3ixpq5oq"
        },
        "is_local": false,
        "primary_color": null,
        "track": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2ZRQcIgzPCVaT9XKhXZIzh"
                        },
                        "href": "https://api.spotify.com/v1/artists/2ZRQcIgzPCVaT9XKhXZIzh",
                        "id": "2ZRQcIgzPCVaT9XKhXZIzh",
                        "name": "Gryffin",
                        "type": "artist",
                        "uri": "spotify:artist:2ZRQcIgzPCVaT9XKhXZIzh"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3JDG63cSaK3xgDnB2H55Xp"
                        },
                        "href": "https://api.spotify.com/v1/artists/3JDG63cSaK3xgDnB2H55Xp",
                        "id": "3JDG63cSaK3xgDnB2H55Xp",
                        "name": "Audrey Mika",
                        "type": "artist",
                        "uri": "spotify:artist:3JDG63cSaK3xgDnB2H55Xp"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AG",
                    "AL",
                    "AM",
                    "AO",
                    "AR",
                    "AT",
                    "AU",
                    "AZ",
                    "BA",
                    "BB",
                    "BD",
                    "BE",
                    "BF",
                    "BG",
                    "BH",
                    "BI",
                    "BJ",
                    "BN",
                    "BO",
                    "BR",
                    "BS",
                    "BT",
                    "BW",
                    "BY",
                    "BZ",
                    "CA",
                    "CH",
                    "CI",
                    "CL",
                    "CM",
                    "CO",
                    "CR",
                    "CV",
                    "CW",
                    "CY",
                    "CZ",
                    "DE",
                    "DJ",
                    "DK",
                    "DM",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FJ",
                    "FM",
                    "FR",
                    "GA",
                    "GB",
                    "GD",
                    "GE",
                    "GH",
                    "GM",
                    "GN",
                    "GQ",
                    "GR",
                    "GT",
                    "GW",
                    "GY",
                    "HK",
                    "HN",
                    "HR",
                    "HT",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JM",
                    "JO",
                    "JP",
                    "KE",
                    "KG",
                    "KH",
                    "KI",
                    "KM",
                    "KN",
                    "KR",
                    "KW",
                    "KZ",
                    "LA",
                    "LB",
                    "LC",
                    "LI",
                    "LK",
                    "LR",
                    "LS",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MD",
                    "ME",
                    "MG",
                    "MH",
                    "MK",
                    "ML",
                    "MN",
                    "MO",
                    "MR",
                    "MT",
                    "MU",
                    "MV",
                    "MW",
                    "MX",
                    "MY",
                    "MZ",
                    "NA",
                    "NE",
                    "NG",
                    "NI",
                    "NL",
                    "NO",
                    "NP",
                    "NR",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PG",
                    "PH",
                    "PK",
                    "PL",
                    "PS",
                    "PT",
                    "PW",
                    "PY",
                    "QA",
                    "RO",
                    "RS",
                    "RU",
                    "RW",
                    "SA",
                    "SB",
                    "SC",
                    "SE",
                    "SG",
                    "SI",
                    "SK",
                    "SL",
                    "SM",
                    "SN",
                    "SR",
                    "ST",
                    "SV",
                    "SZ",
                    "TD",
                    "TG",
                    "TH",
                    "TL",
                    "TN",
                    "TO",
                    "TR",
                    "TT",
                    "TV",
                    "TW",
                    "TZ",
                    "UA",
                    "UG",
                    "US",
                    "UY",
                    "UZ",
                    "VC",
                    "VN",
                    "VU",
                    "WS",
                    "XK",
                    "ZA",
                    "ZM",
                    "ZW"
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2qBzKbaRm9IXomwL7jMdM7"
                },
                "href": "https://api.spotify.com/v1/albums/2qBzKbaRm9IXomwL7jMdM7",
                "id": "2qBzKbaRm9IXomwL7jMdM7",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273ef67b5f76eacede43f847b57",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02ef67b5f76eacede43f847b57",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851ef67b5f76eacede43f847b57",
                        "width": 64
                    }
                ],
                "name": "Safe With Me (with Audrey Mika)",
                "release_date": "2020-11-19",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:2qBzKbaRm9IXomwL7jMdM7"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2ZRQcIgzPCVaT9XKhXZIzh"
                    },
                    "href": "https://api.spotify.com/v1/artists/2ZRQcIgzPCVaT9XKhXZIzh",
                    "id": "2ZRQcIgzPCVaT9XKhXZIzh",
                    "name": "Gryffin",
                    "type": "artist",
                    "uri": "spotify:artist:2ZRQcIgzPCVaT9XKhXZIzh"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3JDG63cSaK3xgDnB2H55Xp"
                    },
                    "href": "https://api.spotify.com/v1/artists/3JDG63cSaK3xgDnB2H55Xp",
                    "id": "3JDG63cSaK3xgDnB2H55Xp",
                    "name": "Audrey Mika",
                    "type": "artist",
                    "uri": "spotify:artist:3JDG63cSaK3xgDnB2H55Xp"
                }
            ],
            "available_markets": [
                "AD",
                "AE",
                "AG",
                "AL",
                "AM",
                "AO",
                "AR",
                "AT",
                "AU",
                "AZ",
                "BA",
                "BB",
                "BD",
                "BE",
                "BF",
                "BG",
                "BH",
                "BI",
                "BJ",
                "BN",
                "BO",
                "BR",
                "BS",
                "BT",
                "BW",
                "BY",
                "BZ",
                "CA",
                "CH",
                "CI",
                "CL",
                "CM",
                "CO",
                "CR",
                "CV",
                "CW",
                "CY",
                "CZ",
                "DE",
                "DJ",
                "DK",
                "DM",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "ES",
                "FI",
                "FJ",
                "FM",
                "FR",
                "GA",
                "GB",
                "GD",
                "GE",
                "GH",
                "GM",
                "GN",
                "GQ",
                "GR",
                "GT",
                "GW",
                "GY",
                "HK",
                "HN",
                "HR",
                "HT",
                "HU",
                "ID",
                "IE",
                "IL",
                "IN",
                "IS",
                "IT",
                "JM",
                "JO",
                "JP",
                "KE",
                "KG",
                "KH",
                "KI",
                "KM",
                "KN",
                "KR",
                "KW",
                "KZ",
                "LA",
                "LB",
                "LC",
                "LI",
                "LK",
                "LR",
                "LS",
                "LT",
                "LU",
                "LV",
                "MA",
                "MC",
                "MD",
                "ME",
                "MG",
                "MH",
                "MK",
                "ML",
                "MN",
                "MO",
                "MR",
                "MT",
                "MU",
                "MV",
                "MW",
                "MX",
                "MY",
                "MZ",
                "NA",
                "NE",
                "NG",
                "NI",
                "NL",
                "NO",
                "NP",
                "NR",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PG",
                "PH",
                "PK",
                "PL",
                "PS",
                "PT",
                "PW",
                "PY",
                "QA",
                "RO",
                "RS",
                "RU",
                "RW",
                "SA",
                "SB",
                "SC",
                "SE",
                "SG",
                "SI",
                "SK",
                "SL",
                "SM",
                "SN",
                "SR",
                "ST",
                "SV",
                "SZ",
                "TD",
                "TG",
                "TH",
                "TL",
                "TN",
                "TO",
                "TR",
                "TT",
                "TV",
                "TW",
                "TZ",
                "UA",
                "UG",
                "US",
                "UY",
                "UZ",
                "VC",
                "VN",
                "VU",
                "WS",
                "XK",
                "ZA",
                "ZM",
                "ZW"
            ],
            "disc_number": 1,
            "duration_ms": 205164,
            "episode": false,
            "explicit": false,
            "external_ids": {
                "isrc": "USUM72019104"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/6Skh3CBum0pZw9TOr7FQnX"
            },
            "href": "https://api.spotify.com/v1/tracks/6Skh3CBum0pZw9TOr7FQnX",
            "id": "6Skh3CBum0pZw9TOr7FQnX",
            "is_local": false,
            "name": "Safe With Me (with Audrey Mika)",
            "popularity": 75,
            "preview_url": "https://p.scdn.co/mp3-preview/939e320fecb59ffb008fdde50412ad1490142774?cid=57a2efad88444313a05aa797afb7757c",
            "track": true,
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:6Skh3CBum0pZw9TOr7FQnX"
        },
        "video_thumbnail": {
        "url": null
        }
    },
    ...
]
```
