/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios';

const spotifyPlaylistInfo = async () => {
  try {
    // const response = await axios.get('http://spotify:1000/spotify/playlist/info');
    const response = await axios.get('http://127.0.0.1:1000/spotify/playlist/info');
    return response.data;
  } catch (err) {
    return err;
  }
};

export default spotifyPlaylistInfo;
