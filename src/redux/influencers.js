import _ from 'lodash';

// Action Types
const ADD_TAG = 'scout/influencers/ADD_TAG';

// Default State
const defaultState = {
  c4q3s3d5f: {firstName: "Dan", lastName: "Green", userName: "DGreen", tags: []},
  d4f5t7r54: {firstName: "Mark", lastName: "Wadden", userName: "MWadden", tags: []},
  f53e5t65l: {firstName: "Dave", lastName: "Cutler", userName: "DCutler", tags: []}
};

// Reducer
export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TAG:
      const {influencerId, tag} = action;
      const tags = _.union(state[influencerId].tags, [tag]);
      const influencer = Object.assign({}, state[influencerId], {tags: tags});
      return Object.assign({}, state, {[influencerId]:influencer});
    default:
      return state;
  }
};

// Action Creators
export function addTag(influencerId, tag) {
  return { type: ADD_TAG, influencerId, tag};
}
