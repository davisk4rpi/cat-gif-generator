import { combineReducers } from 'redux';
import { NEW_GIF, FIND_GIF_URL } from '../actions';

const gifs = function(state = {}, action) {
  switch(action.type){
  case NEW_GIF:
    const data = action.payload.data;
    const addedGif = { [data.id]: data.fixed_height_downsampled_url };
    let newCurrentGif = {
      url: data.fixed_height_downsampled_url,
      id: data.id
    };
    const newState = { ...state, ...addedGif, currentGif: newCurrentGif }
    return { ...newState };
  case FIND_GIF_URL:
    const id = action.payload;
    const url = state[id];
    newCurrentGif = {
      url,
      id
    };
    return { ...state, currentGif: newCurrentGif } ;
  default:
    return state ;
  }
};

const rootReducer = combineReducers({
  gifs,
});


export default rootReducer;
