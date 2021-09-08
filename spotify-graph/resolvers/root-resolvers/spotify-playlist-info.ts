/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import querystring from 'querystring';

import PlaylistInfo from '../../interfaces/playlist-info';

const spotifyPlaylistInfo = async (_: any, { id }: { id: string}): Promise<PlaylistInfo | Error> => {
  try {
    const query = querystring.stringify({
      id,
    });

    const response = await axios.get(`http://spotify:1000/spotify/playlist/info?${query}`);
    // const response = await axios.get('http://127.0.0.1:1000/spotify/playlist/info');
    return response.data as Promise<PlaylistInfo>;
  } catch (err) {
    return new Promise((_, reject) => new Error(err as string));
  }
};

export default spotifyPlaylistInfo;
