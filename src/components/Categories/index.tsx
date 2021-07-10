import React, { FC, memo } from 'react';
import { ICategoriesProps } from './types';
import { ActiveCategoryIndexType } from '../../types';

const Categories: FC<ICategoriesProps> = ({ categoriesMockData, onClickItem, activeCategory }) => {
  const onSelectItem = (index: ActiveCategoryIndexType) => {
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {categoriesMockData &&
          categoriesMockData.map((name, index) => (
            <li
              onClick={() => onSelectItem(index)}
              className={activeCategory === index ? 'active' : ''}
              key={name + index}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default memo(Categories);
