import { Artist } from '../../interfaces';

export const id = (artist: Artist): number => artist.id;
export const name = (artist: Artist): string => artist.name;
export const url = (artist: Artist): string => artist.url;
