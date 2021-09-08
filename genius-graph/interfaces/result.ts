import { Artist } from './artist';

export interface Result {
  id: number;
  url: string;
  song_art_image_url: string;
  title_with_featured: string;
  primary_artist: Artist;
};
