import { ActiveCategoryIndexType } from '../../../types';

export type SortByType = 'popular' | 'price' | 'alphabet';

export type SetSortByType = {
  type: 'SET_SORT_BY';
  payload: SortByType;
};

export type SetCategoryType = {
  type: 'SET_CATEGORY';
  payload: ActiveCategoryIndexType;
};

export type FiltersActionType = SetCategoryType | SetSortByType;
