import React, { FC, memo } from 'react';
import { ICategoriesProps } from './types';

const Categories: FC<ICategoriesProps> = ({ categoriesMockData, onClickItem, activeCategory }) => (
  <div className="categories">
    <ul>
      <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>
        Все
      </li>
      {categoriesMockData &&
        categoriesMockData.map((name, index) => (
          <li
            onClick={() => onClickItem(index)}
            className={activeCategory === index ? 'active' : ''}
            key={name + index}
          >
            {name}
          </li>
        ))}
    </ul>
  </div>
);

export default memo(Categories);
