/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Snippet from '../../interfaces/snippet';
import Thumbnails from '../../interfaces/thumbnails';

const searchResult = (currentSearch: Snippet): string => currentSearch.publishedAt;
const channelId = (currentSearch: Snippet): string => currentSearch.channelId;
const title = (currentSearch: Snippet): string => currentSearch.title;
const description = (currentSearch: Snippet): string => currentSearch.description;
const thumbnails = (currentSearch: Snippet): Thumbnails => currentSearch.thumbnails;

export default {
  searchResult,
  channelId,
  title,
  description,
  thumbnails,
};
