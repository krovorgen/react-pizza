import { ActiveCategoryIndexType } from '../../../types';

export interface ICategoriesProps {
  categoriesMockData: string[];
  onClickItem: (index: ActiveCategoryIndexType) => void;
  activeCategory: ActiveCategoryIndexType;
}
