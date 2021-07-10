import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Cart, Home } from './pages';

const App: FC = () => (
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

export default App;
