import { Result, SearchResult } from '../../interfaces';

export const type = (searchResult: SearchResult): string => searchResult.type;
export const result = (searchResult: SearchResult): Result => searchResult.result;
