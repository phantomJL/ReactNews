import merge from 'lodash/merge';

let initialState = {};

export default function news(state = initialState, action = {}) {
  switch (action.type) {

    case 'SET_NEWS':
      return merge({}, action.state, {});

    case 'SET_NEWS_LIST_BY_PARAM':
      var { id, data } = action;
      state[id] = data;
      return merge({}, state, {});

    default:
      return state;
  }
}

export const getNewsListbyParam = (state, id) => {
  return state.news[id] ? state.news[id] : {};
}
