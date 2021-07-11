import { ProductItemCartType } from '../../../types';

export type ClearCartType = {
  type: 'CLEAR_CART';
};

export type AddProductCartType = {
  type: 'ADD_PRODUCT_CART';
  payload: ProductItemCartType;
};

export type RemoveCartItemType = {
  type: 'REMOVE_CART_ITEM';
  payload: string;
};

export type PlusCartItemType = {
  type: 'PLUS_ITEM';
  payload: string;
};

export type MinusCartItemType = {
  type: 'MINUS_ITEM';
  payload: string;
};

export type CartActionType =
  | ClearCartType
  | AddProductCartType
  | RemoveCartItemType
  | PlusCartItemType
  | MinusCartItemType;
