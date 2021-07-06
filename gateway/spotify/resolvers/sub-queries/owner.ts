/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import Owner from '../../interfaces/owner';
import Url from '../../interfaces/url';

const display_name = (owner: Owner): string => owner.display_name;
const id = (owner: Owner): string => owner.id;
const external_url = (owner: Owner): Url => owner.external_url;

export default {
  display_name,
  id,
  external_url,
};
