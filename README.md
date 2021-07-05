# Cluttr API

<img width="1166" alt="Screen Shot 2021-07-05 at 4 44 17 AM" src="https://user-images.githubusercontent.com/72538359/124466692-b68e5900-dd4b-11eb-87bf-33137d487880.png">

## Introduction

The Cluttr API integrates popular media platforms tailored specific to each user.
Cluttr gives developers the ability to seamlessly coalesce their existing projects with popular APIs to access their data. 

## What does this API provide

- [Spotify Music Data](https://github.com/Jackywu1/Cluttr/tree/main/spotify)
- Twitter Timeline/Tweets
- [YouTube Video Search](https://github.com/Jackywu1/Cluttr/tree/main/youtube)

## How to use

The API is designed as a standalone collection of services rather than installed as a project dependency. See more below.

1. Create a new directory: ```mkdir Cluttr_Service && cd $_```

2. Clone project: ```git clone https://github.com/Jackywu1/Cluttr.git```

3. Follow the instructions for Authentication for each service as needed

4. Run: ```npm install``` to download dependencies

5. Start up the servers: ```npm start```

6. Connect to endpoints as needed!

## How does it work

<img width="1168" alt="Screen Shot 2021-07-05 at 4 41 04 AM" src="https://user-images.githubusercontent.com/72538359/124466730-c443de80-dd4b-11eb-8372-8d686730668f.png">

The Cluttr API follows the Microservices architectural pattern, providing a collection of services loosely coupled and integrated together.
This allows users to fully automate data extraction from popular APIs and customize their applications with the data needed relevant to their own projects. 

The API is meant to be a standalone collection of services rather than a project dependency.
This design choice allows users looking to integrate this API without having to implement the server and endpoints themselves.
