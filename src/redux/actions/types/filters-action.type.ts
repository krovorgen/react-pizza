export type SortByType = 'popular' | 'price' | 'alphabet';

type SetSortByType = {
  type: 'SET_SORT_BY';
  payload: SortByType;
};

type SetCategoryType = {
  type: 'SET_CATEGORY';
  payload: number;
};

export type FiltersActionType = SetCategoryType | SetSortByType;
