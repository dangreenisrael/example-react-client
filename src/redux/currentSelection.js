// Action Types
const ADD_TO_LIST = 'scout/selection/ADD_TO_LIST';
const REMOVE_FROM_LIST = 'scout/selection/REMOVE_FROM_LIST';
const CLEAR_LIST = 'scout/selection/CLEAR_LIST';

// Default State
const defaultState = {ids:[]};

// Reducer
export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      const newIds = state.ids.concat(action.ids);
      return Object.assign({}, state, {ids: newIds});
    case REMOVE_FROM_LIST:
      const updatedIds = state.ids.filter(id => id !== action.id);
      return Object.assign({}, state, {ids: updatedIds});
    case CLEAR_LIST:
      return Object.assign({}, state, {ids: []});
    default:
      return state;
  }
};

// Action Creators
export function toggleSelectedStatus(id, status) {
  if (status){
    return { type: ADD_TO_LIST, ids:[id] };
  }
  return { type: REMOVE_FROM_LIST, id};
}

export function clearSelection() {
  return { type: CLEAR_LIST}
}

export function addToSelection(ids){
  return { type: ADD_TO_LIST, ids: ids };
}
