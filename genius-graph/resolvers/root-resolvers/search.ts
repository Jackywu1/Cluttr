import axios from 'axios';
import querystring from 'querystring';

import { SearchResult } from '../../interfaces';

const request = async (term: string): Promise<any | Error> => {
  const query = querystring.stringify({
    term,
  });

  return axios.get(`http://genius:5000/genius/search?${query}`);
}

export const search = async (_: any, { term }: { term: string }): Promise<SearchResult | Error> => {
  try {
    const { data } = await request(term);
    return data.hits as Promise<SearchResult>;
  } catch (err) {
    return new Promise((_, reject) => reject(new Error(err as string))) as Promise<Error>;
  }
};
