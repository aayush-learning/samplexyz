import {API_DETAILS} from './constants';

export const fetchCall = (searchString) => {
  const {KEY, SEARCH_ENGINE_ID, URL} = API_DETAILS;
  getUrl = `${URL}${KEY}&cx=${SEARCH_ENGINE_ID}&q=${searchString}`;
  return fetch(getUrl).then((res) => res.json());
};
