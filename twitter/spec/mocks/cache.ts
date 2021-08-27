import Tweet from '../../../twitter-graph/interfaces/tweet';
import NormalizedCache from '../../cache/normalized-cache';

const mockCache = (): NormalizedCache => {
  const testtweet: Tweet = {
    id: '1427681723303661600',
    created_at: 'Tue Aug 17 17:20:22 +0000 2021',
    text: 'I sit in the shade cuz I burn easy https://t.co/c7s5p3opAg',
  };

  const mockAdd = jest.fn()
    .mockImplementation((
      key: string,
      expiration: number,
      data: string,
    ): Promise<string> => new Promise((resolve) => {
      resolve('SUCCESS');
    }));

  const mockGet = jest.fn()
    .mockImplementation((key: string): Promise<string> => new Promise((resolve) => {
      resolve(JSON.stringify(testtweet));
    }));

  const cache: NormalizedCache = {
    add: mockAdd,
    get: mockGet,
  };

  return cache;
};

export default mockCache;
