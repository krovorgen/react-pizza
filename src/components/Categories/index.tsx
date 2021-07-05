import React, { FC } from 'react';
import { ActiveCategoryType } from '../../App';

interface ICategoriesProps {
  items: string[];
  setActiveCategory: (index: ActiveCategoryType) => void;
  activeCategory: ActiveCategoryType;
}

const Categories: FC<ICategoriesProps> = ({ items, setActiveCategory, activeCategory }) => {
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
          items.map((name, idx) => (
            <li
              onClick={() => setActiveCategory(idx)}
              className={activeCategory === idx ? 'active' : ''}
              key={name + idx}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
