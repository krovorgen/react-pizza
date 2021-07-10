import { FiltersActionType, SortByType } from './types/filters-action.type';

export const setSortBy = (name: SortByType): FiltersActionType => ({
  type: 'SET_SORT_BY',
  payload: name,
});

export const setCategory = (categoryIndex: number): FiltersActionType => ({
  type: 'SET_CATEGORY',
  payload: categoryIndex,
});
