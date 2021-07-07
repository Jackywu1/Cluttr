/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Artist from '../../interfaces/artist';

const id = (artist: Artist): string => artist.id;
const name = (artist: Artist): string => artist.name;
const type = (artist: Artist): string => artist.type;
const uri = (artist: Artist): string => artist.uri;
const external_urls = (artist: Artist) => artist.external_urls;

export default {
  id,
  name,
  type,
  uri,
  external_urls,
};
