/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Url from './url';

interface Artist {
  id: string;
  name: string;
  type: string;
  uri: string;
  external_urls: Url;
}

export default Artist;
