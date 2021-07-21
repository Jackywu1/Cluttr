/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import SearchResult from '../../interfaces/searchResult';
import Thumbnails from '../../interfaces/thumbnails';

const searchResult = (currentSearch: SearchResult): string => currentSearch.publishedAt;
const channelId = (currentSearch: SearchResult): string => currentSearch.channelId;
const title = (currentSearch: SearchResult): string => currentSearch.title;
const description = (currentSearch: SearchResult): string => currentSearch.description;
const thumbnails = (currentSearch: SearchResult): Thumbnails => currentSearch.thumbnails;

export default {
  searchResult,
  channelId,
  title,
  description,
  thumbnails,
};
