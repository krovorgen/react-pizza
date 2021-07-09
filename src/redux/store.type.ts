import { ProductCardType } from '../App';

export type SortByType = 'popular' | 'price' | 'alphabet';

export type FiltersActionType = {
  type: 'SET_SORT_BY' | 'SET_CATEGORY';
  payload: SortByType | number;
};

export type ProductItemActionType = {
  type: 'SET_PRODUCT';
  payload: ProductCardType[];
};

export type FiltersReducerType = {
  category: number;
  sortBy: SortByType;
};

export type ProductItemReducerType = {
  items: ProductCardType[];
  isLoaded: boolean;
};

export type ActionTypes = FiltersActionType | ProductItemActionType;
