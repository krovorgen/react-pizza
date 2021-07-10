import { SortByType } from '../../actions/types/filters-action.type';
import { ProductCardType } from '../../../types';

export type FiltersInitialStateType = {
  category: number;
  sortBy: SortByType;
};

export type ProductInitialStateType = {
  items: ProductCardType[];
  isLoaded: boolean;
};
