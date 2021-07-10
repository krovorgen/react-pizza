import React, { FC, useState } from 'react';
import { ICategoriesProps } from './types';
import { ActiveCategoryType } from '../../pages/Home';

const Categories: FC<ICategoriesProps> = ({ items, onClickItem }) => {
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
        {items &&
          items.map((name, index) => (
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

export default Categories;
