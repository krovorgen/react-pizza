export type FiltersType = {
  type: 'SET_SORT_BY';
  payload: 'popular' | 'price' | 'alphabet';
};

export type ActionTypes = FiltersType;
