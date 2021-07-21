/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Thumbnails from '../../interfaces/thumbnails';
import ThumbnailUrl from '../../interfaces/thumbnail-url';

const defaultThumbnail = (currentThumbnail: Thumbnails): ThumbnailUrl => currentThumbnail.default;
const mediumThumbnail = (currentThumbnail: Thumbnails): ThumbnailUrl => currentThumbnail.medium;
const highThumbnail = (currentThumbnail: Thumbnails): ThumbnailUrl => currentThumbnail.high;

export default {
  defaultThumbnail,
  mediumThumbnail,
  highThumbnail,
};
