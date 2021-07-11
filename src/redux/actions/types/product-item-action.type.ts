import { IProductCardType } from '../../../types';

export type SetProductType = {
  type: 'SET_PRODUCT';
  payload: IProductCardType[];
};

export type SetLoadedType = {
  type: 'SET_LOADED';
  payload: boolean;
};

export type ProductItemActionType = SetProductType | SetLoadedType;
