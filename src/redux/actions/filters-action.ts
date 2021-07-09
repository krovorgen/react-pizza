import { FiltersType } from '../store.type';

export const setSortBy = (name: 'popular' | 'price' | 'alphabet'): FiltersType => ({
  type: 'SET_SORT_BY',
  payload: name,
});

export const setCategory = (categoryIndex: number): FiltersType => ({
  type: 'SET_CATEGORY',
  payload: categoryIndex,
});
