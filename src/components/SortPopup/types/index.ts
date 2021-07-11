import { SortByType } from '../../../redux/actions/types/filters-action.type';

export type ItemsType = {
  name: string;
  type: SortByType;
};

export interface ISortPopupProps {
  items: ItemsType[];
  activeSortType: SortByType;
  onClickSortType: (name: SortByType) => void;
}
