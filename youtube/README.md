# YouTube Microservice Overview

## YouTube Authorization Flow

#### Authentication

1. rename the ```config/youtube.example.config.ts``` file to ```config/youtube.config.ts```
2. add your ```api_key```, ```client_id```, ```client_secret```, and ```redirect_uri```
3. make a request to /youtube/login to get an access code stored in the cache

## YouTube Microservice API Reference

#### Search Video

```http
GET /youtube/search
```

Retrieves a list of the videos returned by the search term

#### Example Request

```
curl
-X "GET" "/youtube/search"
-d "q="illenium"
-H "Content-Type: application/json"
```

#### Example Response

```
[
    {
        "kind": "youtube#searchResult",
        "etag": "EMC-aa5Jp9icFwVhwYJE28MCgt8",
        "id": {
            "kind": "youtube#channel",
            "channelId": "UCv0tIDoaBZCTXQvVO4zosng"
        },
        "snippet": {
            "publishedAt": "2013-11-11T02:52:41Z",
            "channelId": "UCv0tIDoaBZCTXQvVO4zosng",
            "title": "ILLENIUM",
            "description": "The official YouTube Channel for ILLENIUM Sideways with Valerie Broussard and Nurko Out Now: https://smarturl.it/ILLENIUMSideways.",
            "thumbnails": {
                "default": {
                    "url": "https://yt3.ggpht.com/ytc/AKedOLTYIkWZE52_q4eY6LSjFesDsFPUPiJNSYuGA3W1GQ=s88-c-k-c0xffffffff-no-rj-mo"
                },
                "medium": {
                    "url": "https://yt3.ggpht.com/ytc/AKedOLTYIkWZE52_q4eY6LSjFesDsFPUPiJNSYuGA3W1GQ=s240-c-k-c0xffffffff-no-rj-mo"
                },
                "high": {
                    "url": "https://yt3.ggpht.com/ytc/AKedOLTYIkWZE52_q4eY6LSjFesDsFPUPiJNSYuGA3W1GQ=s800-c-k-c0xffffffff-no-rj-mo"
                }
            },
            "channelTitle": "ILLENIUM",
            "liveBroadcastContent": "none",
            "publishTime": "2013-11-11T02:52:41Z"
        }
    },
    ...
]
```