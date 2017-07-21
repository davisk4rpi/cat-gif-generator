import axios from 'axios';

export const NEW_GIF = 'new_gif';

const ROOT_URL = 'http://api.giphy.com/v1/gifs/random?';
const API_KEY = '34e971dfebe74aa6b5ff792cef8614dc'

export function newGif() {
  const request = axios.get(`${ROOT_URL}tag=funny+cat&api_key=${API_KEY}`);

  return {
    type: NEW_GIF,
    payload: request
  };
}
