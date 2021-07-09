import { ProductItemActionType } from '../store.type';
import { ProductCardType } from '../../App';

export const setProductItem = (items: ProductCardType[]): ProductItemActionType => ({
  type: 'SET_PRODUCT',
  payload: items,
});
