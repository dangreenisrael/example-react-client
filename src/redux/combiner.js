import { combineReducers } from 'redux'
import currentSelection from './currentSelection';
import influencers from './influencers';
import tags from './tags';

export default combineReducers({
  currentSelection,
  influencers,
  tags
})