import { ProductItemActionType } from './types/product-item-action.type';
import { ProductCardType } from '../../types';

export const setProductItem = (items: ProductCardType[]): ProductItemActionType => ({
  type: 'SET_PRODUCT',
  payload: items,
});
