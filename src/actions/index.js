import axios from 'axios';
import _ from 'lodash';

export const IS_LOADING = 'is_loading';
export const NEW_GIF = 'new_gif';
export const UPDATE_TAG = 'update_tag';
export const FIND_GIF_URL = 'find_gif_url';

const ROOT_URL = 'https://api.giphy.com/v1/gifs/';
const API_KEY = '34e971dfebe74aa6b5ff792cef8614dc'

export function isLoading() {
  return {
    type: IS_LOADING,
    payload: true
  };
}

export function newGif(callback, term='funny cat', gifs) {
  const tag = term.replace(/ /g, '+');
  const gifIds = _.keys(gifs);
  const request = axios.get(`${ROOT_URL}random?tag=${tag}&api_key=${API_KEY}`);

  return (dispatch) => {
    request.then(({data}) => {
      callback(data.data.id);
      dispatch({ type: NEW_GIF, payload: data })
    });
  };

}

export function updateTag(tag) {
  return {
    type: UPDATE_TAG,
    payload: tag
  };
}

export function findGifUrl(id) {
  return {
    type: FIND_GIF_URL,
    payload: id
  };
}
