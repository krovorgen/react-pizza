import React, { FC, memo, useState } from 'react';
import { ICategoriesProps } from './types';
import { ActiveCategoryType } from '../../pages/Home';

const Categories: FC<ICategoriesProps> = ({ categoriesMockData, onClickItem }) => {
  const [activeCategory, setActiveCategory] = useState<ActiveCategoryType>(null);

  const onSelectItem = (index: number) => {
    setActiveCategory(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => setActiveCategory(null)}
        >
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
