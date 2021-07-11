import { CartInitialStateType } from './types';
import { CartActionType } from '../actions/types/cart-action.type';
import { ProductItemCartType } from '../../types';

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
    case 'ADD_PRODUCT_CART': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const totalCount: ProductItemCartType[][] = Object.values(newItems);

      const allSelectedProducts = ([] as ProductItemCartType[]).concat(...totalCount);

      const totalPrice = allSelectedProducts.reduce((sum, obj) => sum + obj.price, 0);

      return {
        ...state,
        items: newItems,
        totalProductItem: allSelectedProducts.length,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
