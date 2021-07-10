import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { setProductItem } from './redux/actions/product-item-action';
import { Header } from './components';
import { Cart, Home } from './pages';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setProductItem(data));
    });
  }, [dispatch]);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
        </div>
      </div>
    </>
  );
};

export default App;
