/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import ThumbnailUrl from '../../interfaces/thumbnail-url';

const url = (currentThumbnailUrl: ThumbnailUrl): string => currentThumbnailUrl.url;

export default {
  url,
};
