import { CartInitialStateType } from './types';
import { CartActionType } from '../actions/types/cart-action.type';
import { ProductItemCartType } from '../../types';

const initialState: CartInitialStateType = {
  items: {},
  totalPrice: 0,
  totalProductItem: 0,
};

const getTotalPrice = (arr: ProductItemCartType[]) => arr.reduce((sum, obj) => sum + obj.price, 0);

const cartReducer = (state = initialState, action: CartActionType) => {
  switch (action.type) {
    case 'CLEAR_CART': {
      return {
        totalPrice: 0,
        totalProductItem: 0,
        items: {},
      };
    }
    case 'ADD_PRODUCT_CART': {
      const currentProductItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentProductItems,
          totalPrice: getTotalPrice(currentProductItems),
        },
      };

      const totalCount: ProductItemCartType[][] = Object.values(newItems).map((obj) => obj.items);

      const allSelectedProducts = ([] as ProductItemCartType[]).concat(...totalCount);

      const totalPrice = getTotalPrice(allSelectedProducts);

      return {
        ...state,
        items: newItems,
        totalProductItem: allSelectedProducts.length,
        totalPrice,
      };
    }

    case 'REMOVE_CART_ITEM': {
      const newItems = {
        ...state.items,
      };

      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentProductItem = newItems[action.payload].items.length;

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalProductItem: state.totalProductItem - currentProductItem,
      };
    }

    case 'PLUS_ITEM': {
      const newItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
      };
    }

    case 'MINUS_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
