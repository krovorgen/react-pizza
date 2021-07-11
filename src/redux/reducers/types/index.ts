import { SortByType } from '../../actions/types/filters-action.type';
import { ActiveCategoryIndexType, IProductCardType, ProductItemCartType } from '../../../types';

export type FiltersInitialStateType = {
  category: ActiveCategoryIndexType;
  sortBy: SortByType;
};

export type ProductInitialStateType = {
  items: IProductCardType[];
  isLoaded: boolean;
};

export type ItemsType = {
  items: ProductItemCartType[];
  totalPrice: number;
};

export type CartInitialStateType = {
  items: {
    [key: string]: ItemsType;
  };
  totalPrice: number;
  totalProductItem: number;
};
