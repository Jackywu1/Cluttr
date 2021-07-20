/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Artist from './artist';
import Url from './url';

interface Track {
  name: string;
  id: string;
  artists: Array<Artist>;
  external_urls: Url;
}

export default Track;
