/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import PlaylistInfo from '../../interfaces/playlist-info';
import Track from '../../interfaces/track';

const track = (playlistInfo: PlaylistInfo): Track => playlistInfo.track;

export default {
  track,
};
