/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Playlist from '../../interfaces/playlist';
import Owner from '../../interfaces/owner';

const id = (currentPlaylist: Playlist): string => currentPlaylist.id;
const name = (currentPlaylist: Playlist): string => currentPlaylist.name;
const owner = (currentPlaylist: Playlist): Owner => currentPlaylist.owner;

const playlist = {
  id,
  name,
  owner,
};

export default playlist;
