import { ProductInitialStateType } from './types';
import { ProductItemActionType } from '../actions/types/product-item-action.type';

const initialState: ProductInitialStateType = {
  items: [],
  isLoaded: false,
};

const productItemReducer = (state = initialState, action: ProductItemActionType) => {
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
