/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Thumbnails from './thumbnails';

interface SearchResult {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
}

export default SearchResult;
