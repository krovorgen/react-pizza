import { FiltersInitialStateType, ProductInitialStateType } from './reducers/types';

export type RootState = {
  filters: FiltersInitialStateType;
  productItem: ProductInitialStateType;
};
