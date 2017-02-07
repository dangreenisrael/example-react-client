// Action Types
// const ADD_TO_LIST = 'scout/selection/ADD_TO_LIST';
// const REMOVE_FROM_LIST = 'scout/selection/REMOVE_FROM_LIST';

// Default State
const defaultState = {
  tags: [
    "Facebook",
    "Twitter",
    "Blog",
    "Instagram"
  ]
};

// Reducer
export default (state = defaultState, action) => {
  switch (action.type) {
    // case ADD_TO_LIST:
    //   return Object.assign({}, state, {ids: [...state.ids, action.id]});
    // case REMOVE_FROM_LIST:
    //   const updatedIds = state.ids.filter(id => id !== action.id);
    //   return Object.assign({}, state, {ids: updatedIds});
    default:
      return state;
  }
};

// Action Creators
// export function toggleSelectedStatus(id, status) {
//   if (status){
//     return { type: ADD_TO_LIST, id };
//   }
//   return { type: REMOVE_FROM_LIST, id};
// }
