import { combineReducers } from 'redux';
import { NEW_GIF } from '../actions';

const newGif = function(state = {}, action) {
  switch(action.type){
  case NEW_GIF:
    // returns a new state object that omit's the key associated with the deleted post's ID
    return action.payload.data.data;
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  gif: newGif,
});


export default rootReducer;
