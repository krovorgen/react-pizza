import { ActionTypes } from '../store.type';

const initialState = {
  category: 0,
  sortBy: 'popular',
};

const filters = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export default filters;
