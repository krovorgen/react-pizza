import React, { FC, useState } from 'react';

import { Categories, ProductCard, SortPopup } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store.type';

export type ActiveCategoryType = number | null;

const Home: FC = () => {
  const { productItem } = useSelector((state: RootState) => {
    return {
      productItem: state.productItem.items,
      sortBy: state.filters.sortBy,
    };
  });

  const categoriesMockData = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const sortMockData = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
  ];

  const [activeSortName, setActiveSortName] = useState<number>(0);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={(index) => console.log(index)} items={categoriesMockData} />
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
