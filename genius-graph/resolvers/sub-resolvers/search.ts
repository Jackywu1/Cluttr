import { Artist, SearchResult } from '../../interfaces';

export const id = (result: SearchResult): number => result.id;
export const url = (result: SearchResult): string => result.url;
export const song_art_image_url = (result: SearchResult): string => result.song_art_image_url;
export const title_with_featured = (result: SearchResult): string => result.title_with_featured;
export const artist = (result: SearchResult): Artist => result.artist;
