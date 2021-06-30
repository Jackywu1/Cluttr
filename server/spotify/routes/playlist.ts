/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import axios from 'axios';

import spotify from '../../../config/spotify.config';
import cache from '../cache';

const {
  client_id,
} = spotify;

const playlist = async (req: Request, res: Response) => {
  const accessCode = await cache.get(client_id);

  const response = await axios({
    url: 'https://api.spotify.com/v1/me/playlists',
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessCode}`,
    },
  });

  const { items } = response.data;
  res.status(200).send(items);
};

export default playlist;

//         .then(({ data }) => {
//           const { items } = data;
//           const playlistData = [];

//           items.forEach((playlist, index) => {
//             const { id, external_urls, images, name, tracks, type } = playlist;

//             const playlistUrl = external_urls.spotify.split(`/`);
//             const playlistId = playlistUrl[playlistUrl.length - 1];

//             const url = `https://open.spotify.com/embed/playlist/${playlistId}`;

//             playlistData.push({
//               name,
//               id,
//               url,
//               image_url: images[0].url,
//               tracksCount: tracks.total,
//             });
//           });

//           res.send(playlistData);
//         })
//         .catch((err) => res.send(err));
//     });
//   },