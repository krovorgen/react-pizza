import {
  AddProductCartType,
  ClearCartType,
  MinusCartItemType,
  PlusCartItemType,
  RemoveCartItemType,
} from './types/cart-action.type';
import { ProductItemCartType } from '../../types';

export const addProductCart = (obj: ProductItemCartType): AddProductCartType => ({
  type: 'ADD_PRODUCT_CART',
  payload: obj,
});

export const clearCart = (): ClearCartType => ({
  type: 'CLEAR_CART',
});

export const removeCartItem = (id: string): RemoveCartItemType => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});

export const plusCartItem = (id: string): PlusCartItemType => ({
  type: 'PLUS_ITEM',
  payload: id,
});

export const minusCartItem = (id: string): MinusCartItemType => ({
  type: 'MINUS_ITEM',
  payload: id,
});
