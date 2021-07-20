/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import spotifyService from './spotify/server';
import youtubeService from './youtube';
import twitterService from './twitter';

export default [
  spotifyService(),
  youtubeService(),
  twitterService(),
];
