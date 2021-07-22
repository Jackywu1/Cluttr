/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import SearchResult from '../../interfaces/searchResult';
import Snippet from '../../interfaces/snippet';

const snippet = (currentSearch: SearchResult): Snippet => currentSearch.snippet;

export default {
  snippet,
};
