import { SetCategoryType, SetSortByType, SortByType } from './types/filters-action.type';
import { ActiveCategoryIndexType } from '../../types';

export const setSortBy = (name: SortByType): SetSortByType => ({
  type: 'SET_SORT_BY',
  payload: name,
});

export const setCategory = (categoryIndex: ActiveCategoryIndexType): SetCategoryType => ({
  type: 'SET_CATEGORY',
  payload: categoryIndex,
});
