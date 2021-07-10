import { ProductInitialStateType } from './types';
import { ActionTypes } from '../actions/types';

const initialState: ProductInitialStateType = {
  items: [],
  isLoaded: false,
};

const productItemReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'SET_PRODUCT':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default productItemReducer;
