import { SortByType } from '../../actions/types/filters-action.type';
import { ActiveCategoryIndexType, IProductCardType } from '../../../types';

export type FiltersInitialStateType = {
  category: ActiveCategoryIndexType;
  sortBy: SortByType;
};

export type ProductInitialStateType = {
  items: IProductCardType[];
  isLoaded: boolean;
};

export type CartInitialStateType = {
  items: any; // TODO: any
  totalPrice: number;
  totalProductItem: number;
};
