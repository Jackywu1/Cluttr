/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios';

// import Playlist from '../../interfaces/playlist';

const spotifyPlaylist = async () => {
  try {
    // const response = await axios.get('http://spotify:1000/spotify/playlist');
    const response = await axios.get('http://127.0.0.1:1000/spotify/playlist');
    return response.data;
  } catch (err) {
    return err;
  }
};

export default spotifyPlaylist;
