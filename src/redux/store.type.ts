import { ProductCardType } from '../App';

export type FiltersType = {
  type: 'SET_SORT_BY' | 'SET_CATEGORY';
  payload: 'popular' | 'price' | 'alphabet' | number;
};

export type ProductItemType = {
  type: 'SET_PRODUCT';
  payload: ProductCardType[];
};

export type FiltersReducerType = {
  category: number;
  sortBy: 'popular' | 'price' | 'alphabet';
};

export type ActionTypes = FiltersType | ProductItemType;
