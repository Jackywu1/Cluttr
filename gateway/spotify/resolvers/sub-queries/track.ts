/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Artist from '../../interfaces/artist';
import Track from '../../interfaces/track';
import Url from '../../interfaces/url';

const name = (track: Track): string => track.name;
const id = (track: Track): string => track.id;
const artists = (track: Track): Array<Artist> => track.artists;
const external_urls = (track: Track): Url => track.external_urls;

export default {
  name,
  id,
  artists,
  external_urls,
};
