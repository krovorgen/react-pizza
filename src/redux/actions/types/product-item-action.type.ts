import { ProductCardType } from '../../../types';

export type SetProductType = {
  type: 'SET_PRODUCT';
  payload: ProductCardType[];
};

export type SetLoadedType = {
  type: 'SET_LOADED';
  payload: boolean;
};

export type ProductItemActionType = SetProductType | SetLoadedType;
