import axios from 'axios';

export const NEW_GIF = 'new_gif';
export const FIND_GIF_URL = 'find_gif_url';

const ROOT_URL = 'http://api.giphy.com/v1/gifs/';
const API_KEY = '34e971dfebe74aa6b5ff792cef8614dc'

export function newGif(callback) {
  const request = axios.get(`${ROOT_URL}random?tag=funny+cat&api_key=${API_KEY}`);

  return (dispatch) => {
    request.then(({data}) => {
      callback(data.data.id);
      dispatch({ type: NEW_GIF, payload: data })
    });
  };

}

export function findGifUrl(id) {
  return {
    type: FIND_GIF_URL,
    payload: id
  };
}
