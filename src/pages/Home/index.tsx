import React, { FC, useCallback, useEffect } from 'react';

import { Categories, LoadingBlock, ProductCard, SortPopup } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store.type';
import { setCategory, setSortBy } from '../../redux/actions/filters-action';
import { fetchProduct } from '../../redux/actions/product-item-action';
import { ActiveCategoryIndexType, ProductItemCartType } from '../../types';
import { SortByType } from '../../redux/actions/types/filters-action.type';
import { ItemsType } from '../../components/SortPopup/types';
import { addProductCart } from '../../redux/actions/cart-action';

const Home: FC = () => {
  const dispatch = useDispatch();

  const { isLoaded, items } = useSelector((state: RootState) => state.productItem);
  const { category, sortBy } = useSelector((state: RootState) => state.filters);
  // const { totalProductItem } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(fetchProduct(sortBy, category));
  }, [dispatch, category, sortBy]);

  const categoriesMockData = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const onSelectCategory = useCallback(
    (index: ActiveCategoryIndexType) => dispatch(setCategory(index)),
    [dispatch]
  );

  const sortMockData: ItemsType[] = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' },
  ];
  const onClickSortType = useCallback((name: SortByType) => dispatch(setSortBy(name)), [dispatch]);

  const onClickAddProduct = (obj: ProductItemCartType) => {
    dispatch(addProductCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          categoriesMockData={categoriesMockData}
          activeCategory={category}
        />
        <SortPopup activeSortType={sortBy} items={sortMockData} onClickSortType={onClickSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => {
              return <ProductCard key={item.id} {...item} onClickAddProduct={onClickAddProduct} />;
            })
          : Array(10)
              .fill(0)
              .map((item, index) => <LoadingBlock key={item + index} />)}
      </div>
    </div>
  );
};

export default Home;
