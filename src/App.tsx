import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Cart, Home } from './pages';

type ProductItemType = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

const App = () => {
  const [productItem, setProductItem] = useState<ProductItemType[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((response) => response.json())
      .then((json) => {
        setProductItem(json.pizzas);
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" exact render={() => <Home />} />
          <Route path="/cart" exact render={() => <Cart />} />
        </div>
      </div>
    </>
  );
};

export default App;
