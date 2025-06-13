import { base_Url } from './base_Url';
import { commonAPI } from './commonAPI';

export const getAllDestinationsAPI = () =>
  commonAPI('GET', `${base_Url}/api/destinations`);

export const getTopSellingPackagesAPI = () =>
  commonAPI('GET', `${base_Url}/api/packages/top-selling`);
