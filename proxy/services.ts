/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import spotifyService from '../spotify';
import youtubeService from '../youtube';

export default [
  spotifyService(),
  youtubeService(),
];
