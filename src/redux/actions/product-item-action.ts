import { SetLoadedType, SetProductType } from './types/product-item-action.type';
import { ActiveCategoryIndexType, IProductCardType } from '../../types';
import axios from 'axios';
import { SortByType } from './types/filters-action.type';

export const setProductItem = (items: IProductCardType[]): SetProductType => ({
  type: 'SET_PRODUCT',
  payload: items,
});

export const setLoaded = (value: boolean): SetLoadedType => ({
  type: 'SET_LOADED',
  payload: value,
});

export const fetchProduct =
  (sortBy: SortByType, category: ActiveCategoryIndexType) =>
  (dispatch: (arg0: SetProductType | SetLoadedType) => void) => {
    dispatch(setLoaded(false));
    axios
      .get(`/pizzas`, {
        params: {
          category: category,
          _sort: sortBy,
          _order: 'asc',
        },
      })
      .then(({ data }) => {
        dispatch(setProductItem(data));
      });
  };
