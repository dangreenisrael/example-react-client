import { combineReducers } from 'redux'
import currentSelection from './currentSelection';
import influencers from './influencers';

export default combineReducers({
  currentSelection,
  influencers
})