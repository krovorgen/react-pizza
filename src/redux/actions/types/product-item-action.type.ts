import { ProductCardType } from '../../../types';

type SetProductType = {
  type: 'SET_PRODUCT';
  payload: ProductCardType[];
};

export type ProductItemActionType = SetProductType;
