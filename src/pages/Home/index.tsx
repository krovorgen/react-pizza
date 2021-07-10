import React, { FC, useCallback } from 'react';

import { Categories, ProductCard, SortPopup } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store.type';
import { setCategory } from '../../redux/actions/filters-action';

export type ActiveCategoryType = number | null;

const Home: FC = () => {
  const dispatch = useDispatch();
  const productItem = useSelector((state: RootState) => state.productItem.items);

  const onSelectCategory = useCallback(
    (index: number) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );
  const categoriesMockData = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const sortMockData = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
  ];

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} categoriesMockData={categoriesMockData} />
        <SortPopup items={sortMockData} />
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
