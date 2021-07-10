import { SortByType } from '../../actions/types/filters-action.type';
import { ActiveCategoryIndexType, ProductCardType } from '../../../types';

export type FiltersInitialStateType = {
  category: ActiveCategoryIndexType;
  sortBy: SortByType;
};

export type ProductInitialStateType = {
  items: ProductCardType[];
  isLoaded: boolean;
};
