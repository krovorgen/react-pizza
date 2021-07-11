import { CartInitialStateType } from './types';
import { CartActionType } from '../actions/types/cart-action.type';

const initialState: CartInitialStateType = {
  items: {},
  totalPrice: 0,
  totalProductItem: 0,
};

const cartReducer = (state = initialState, action: CartActionType) => {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: action.payload,
      };
    case 'SET_TOTAL_PRODUCT':
      return {
        ...state,
        totalProductItem: action.payload,
      };
    case 'ADD_PRODUCT_CART':
      return {
        ...state,
        items: {
          [action.payload.id]: [...state.items[action.payload.id], action.payload],
        },
      };
    default:
      return state;
  }
};

export default cartReducer;
