# Twitter Microservice Overview

## Twitter Authorization Flow

#### Authentication

1. rename the ```config/twitter.example.config.ts``` file to ```config/twitter.config.ts```
2. add your ```bearer_token```, ```access_token```, ```access_token_secret```, ```consumer_key```and ```consumer_secret```

## Twitter Microservice API Reference

#### Search User Profile

```http
GET /twitter/:user
```

Retrieves profile data about from a twitter user

#### Example Request

```
curl
-X "GET" "/twitter/illenium"
-H "Content-Type: application/json"
```

#### Example Response

```
{
    "public_metrics": {
        "followers_count": 222059,
        "following_count": 797,
        "tweet_count": 7693,
        "listed_count": 489
    },
    "id": "2187489492",
    "username": "ILLENIUM",
    "profile_image_url": "https://pbs.twimg.com/profile_images/1295419093735153666/s7ADbPOW_normal.jpg",
    "name": "ILLENIUM",
    "description": "",
    "pinned_tweet_id": "1411791648514732040"
}
```

```http
GET /twitter/tweets/:id
```

#### Example Request

```
curl
-X "GET" "/twitter/tweets/2187489492"
-H "Content-Type: application/json"
```

#### Example Response

```
[
    {
        "created_at": "Mon Jul 05 11:13:24 +0000 2021",
        "id": 1412006693911687200,
        "id_str": "1412006693911687168",
        "text": "@TayNotSoSwift @BillSpalding7 @LittleMasshole @cjsters_ @Zedd It’s all good fam. He on a mission. Fkn amazing weekend 🙏🙏🔥🔥",
        "truncated": false,
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "TayNotSoSwift",
                    "name": "taylor dickason",
                    "id": 396447649,
                    "id_str": "396447649",
                    "indices": [
                        0,
                        14
                    ]
                },
                {
                    "screen_name": "BillSpalding7",
                    "name": "Bill Spalding(EDMBOOMER)",
                    "id": 1356182306998907000,
                    "id_str": "1356182306998906880",
                    "indices": [
                        15,
                        29
                    ]
                },
                {
                    "screen_name": "LittleMasshole",
                    "name": "𝓢𝓶𝓸𝓵 𝓞𝓷𝓮",
                    "id": 1053427087292461000,
                    "id_str": "1053427087292461057",
                    "indices": [
                        30,
                        45
                    ]
                },
                {
                    "screen_name": "cjsters_",
                    "name": "CJ ✰",
                    "id": 3158327560,
                    "id_str": "3158327560",
                    "indices": [
                        46,
                        55
                    ]
                },
                {
                    "screen_name": "Zedd",
                    "name": "Zedd",
                    "id": 155705264,
                    "id_str": "155705264",
                    "indices": [
                        56,
                        61
                    ]
                }
            ],
            "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": 1412006358392524800,
        "in_reply_to_status_id_str": "1412006358392524808",
        "in_reply_to_user_id": 396447649,
        "in_reply_to_user_id_str": "396447649",
        "in_reply_to_screen_name": "TayNotSoSwift",
        "user": {
            "id": 2187489492,
            "id_str": "2187489492",
            "name": "ILLENIUM",
            "screen_name": "ILLENIUM",
            "location": "Denver, CO",
            "description": "",
            "url": "https://t.co/kiYzK7XNiK",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/kiYzK7XNiK",
                            "expanded_url": "http://bit.ly/Pre-SaveFallenEmbers",
                            "display_url": "bit.ly/Pre-SaveFallen…",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 222090,
            "friends_count": 797,
            "listed_count": 488,
            "created_at": "Mon Nov 11 01:44:33 +0000 2013",
            "favourites_count": 19081,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 7698,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "0A0801",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme9/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme9/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1295419093735153666/s7ADbPOW_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1295419093735153666/s7ADbPOW_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/2187489492/1620359962",
            "profile_link_color": "CE7834",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "78C0A8",
            "profile_text_color": "5E412F",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": false,
            "default_profile_image": false,
            "following": null,
            "follow_request_sent": null,
            "notifications": null,
            "translator_type": "none",
            "withheld_in_countries": []
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 6,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
    },
    ...
]
```