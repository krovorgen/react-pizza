import { ProductItemType } from '../store.type';
import { ProductCardType } from '../../App';

export const setProductItem = (items: ProductCardType[]): ProductItemType => ({
  type: 'SET_PRODUCT',
  payload: items,
});
