import { ActionTypes, ProductItemReducerType } from '../store.type';

const initialState: ProductItemReducerType = {
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
