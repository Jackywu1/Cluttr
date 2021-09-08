import { Artist } from './artist';

export interface SearchResult {
  id: number;
  url: string;
  song_art_image_url: string;
  title_with_featured: string;
  artist: Artist;
};
