# Cluttr API

## Introduction

The Cluttr API provides a collection of popular media platforms tailored specific to each user.
The API gives developers the ability to seamlessly integrate their existing projects with popular APIs to access their data. 

## What does this API provide

- [Spotify Music Data](https://github.com/Jackywu1/Cluttr/tree/main/spotify)
- Twitter Timeline/Tweets
- [YouTube Video Search](https://github.com/Jackywu1/Cluttr/tree/main/youtube)

## How to use

The API is designed as a standalone collection of services rather than installed as a project dependency. See more in the How does it work section.

1. Create a new directory ```mkdir Cluttr_Service && cd $_```
2. Clone project ```git clone https://github.com/Jackywu1/Cluttr.git```
3. Follow the instructions for Authentication for each service as needed
4. Run ```npm install``` to download dependencies
5. Start up the servers ```npm start```
6. Connect to endpoints as needed!

## How does it work

The Cluttr API follows the Microservices architectural pattern, providing a collection of services loosely coupled and integrated together.
This allows users to fully automate data extraction from popular APIs and customize their applications with the data needed relevant to their own projects. 

The API is meant to be a standalone collection of services rather than a project dependency.
This design choice allows users looking to integrate this API without having to implement the server and endpoints themselves.
