import { combineReducers } from 'redux';
import { NEW_GIF, FIND_GIF } from '../actions';

const newGif = function(state = {}, action) {
  switch(action.type){
  case NEW_GIF:
    let data = action.payload.data.data;
    data.chosenUrl= data.fixed_height_downsampled_url;
    return data;
  case FIND_GIF:
    data = action.payload.data.data;
    data.chosenUrl= data.images.fixed_height_downsampled.url;
    return data;
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  gif: newGif,
});


export default rootReducer;
