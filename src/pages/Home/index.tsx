import React, { FC, useState } from 'react';

import { Categories, ProductCard, SortPopup } from '../../components';
import { ProductCardType } from '../../App';

export type ActiveCategoryType = number | null;

interface IHomeProps {
  productItem: ProductCardType[];
}

const Home: FC<IHomeProps> = ({ productItem }) => {
  const categoriesMockData = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortMockData = ['популярности', 'цене', 'алфавиту'];

  const [activeCategory, setActiveCategory] = useState<ActiveCategoryType>(null);
  const [activeSortName, setActiveSortName] = useState<number>(0);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={(index) => setActiveCategory(index)}
          items={categoriesMockData}
        />
        <SortPopup
          items={sortMockData}
          activeSortName={activeSortName}
          setActiveSortName={setActiveSortName}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {productItem &&
          productItem.map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Home;
