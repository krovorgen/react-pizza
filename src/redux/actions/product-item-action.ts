import { SetLoadedType, SetProductType } from './types/product-item-action.type';
import { ProductCardType } from '../../types';
import axios from 'axios';

export const setProductItem = (items: ProductCardType[]): SetProductType => ({
  type: 'SET_PRODUCT',
  payload: items,
});

export const setLoaded = (value: boolean): SetLoadedType => ({
  type: 'SET_LOADED',
  payload: value,
});

export const fetchProduct = () => (dispatch: (arg0: SetProductType | SetLoadedType) => void) => {
  dispatch(setLoaded(false));
  axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    dispatch(setProductItem(data));
  });
};
