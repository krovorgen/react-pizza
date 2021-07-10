import { ActionTypes } from '../actions/types';
import { FiltersInitialStateType } from './types';

const initialState: FiltersInitialStateType = {
  category: 0,
  sortBy: 'popular',
};

const filtersReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
