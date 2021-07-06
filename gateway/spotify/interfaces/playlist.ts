/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Owner from './owner';

interface Playlist {
  id: string;
  name: string;
  owner: Owner;
}

export default Playlist;
