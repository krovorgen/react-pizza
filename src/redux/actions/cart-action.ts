import {
  AddProductCartType,
  SetTotalPriceType,
  SetTotalProductType,
} from './types/cart-action.type';

export const setTotalPrice = (price: number): SetTotalPriceType => ({
  type: 'SET_TOTAL_PRICE',
  payload: price,
});

export const setTotalProduct = (amount: number): SetTotalProductType => ({
  type: 'SET_TOTAL_PRODUCT',
  payload: amount,
});

export const addProductCart = (obj: object): AddProductCartType => ({
  type: 'ADD_PRODUCT_CART',
  payload: obj,
});
