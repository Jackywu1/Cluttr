import { Artist, Result } from '../../interfaces';

export const id = (result: Result): number => result.id;
export const url = (result: Result): string => result.url;
export const song_art_image_url = (result: Result): string => result.song_art_image_url;
export const title_with_featured = (result: Result): string => result.title_with_featured;
export const primary_artist = (result: Result): Artist => result.primary_artist;
