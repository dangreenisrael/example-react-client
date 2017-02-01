import { combineReducers } from 'redux'
import demo from './demoReducer'
import history from './historyReducer'

export default combineReducers({
  demo,
  history
})