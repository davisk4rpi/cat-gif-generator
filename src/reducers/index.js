import { combineReducers } from 'redux';
import { NEW_GIF, FIND_GIF_URL, UPDATE_TAG } from '../actions';

const gifs = function(state = {}, action) {
  switch(action.type){
  case NEW_GIF:
    const data = action.payload.data;
    const addedGif = { [data.id]: data.fixed_height_downsampled_url };
    let newCurrentGif = {
      url: data.image_url,
      id: data.id
    };
    const newState = { ...state, ...addedGif, currentGif: newCurrentGif }
    return { ...newState };
  case FIND_GIF_URL:
    const id = action.payload;
    const url = state[id];
    if (!url) {
      newCurrentGif = {
        url: "http://media3.giphy.com/media/DdrpWxFSsADrW/giphy.gif",
        id: "rickrolled"
      }
    }
    else {
      newCurrentGif = {
        url,
        id
      };
    }
    return { ...state, currentGif: newCurrentGif } ;
  default:
    return state ;
  }
};

const tag = function(state = 'funny cat', action) {
  switch(action.type){
    case UPDATE_TAG:
      const tag = action.payload;
      return tag;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  gifs,
  tag
});


export default rootReducer;
