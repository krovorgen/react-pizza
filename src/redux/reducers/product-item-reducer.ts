import { ActionTypes } from '../store.type';

const initialState = {
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
