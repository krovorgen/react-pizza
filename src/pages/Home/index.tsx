import React, { FC, useCallback, useEffect } from 'react';

import { Categories, LoadingBlock, ProductCard, SortPopup } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store.type';
import { setCategory } from '../../redux/actions/filters-action';
import { fetchProduct } from '../../redux/actions/product-item-action';
import { ActiveCategoryIndexType } from '../../types';

const Home: FC = () => {
  const dispatch = useDispatch();

  const isLoaded = useSelector((state: RootState) => state.productItem.isLoaded);
  const productItem = useSelector((state: RootState) => state.productItem.items);
  const { category, sortBy } = useSelector((state: RootState) => state.filters);
  console.log(category, sortBy);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch, category]);

  const categoriesMockData = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const onSelectCategory = useCallback(
    (index: ActiveCategoryIndexType) => dispatch(setCategory(index)),
    [dispatch]
  );

  const sortMockData = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
  ];

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          categoriesMockData={categoriesMockData}
          activeCategory={category}
        />
        <SortPopup items={sortMockData} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? productItem.map((item) => {
              return <ProductCard key={item.id} {...item} />;
            })
          : Array(10)
              .fill(0)
              .map((item, index) => <LoadingBlock key={item + index} />)}
      </div>
    </div>
  );
};

export default Home;
