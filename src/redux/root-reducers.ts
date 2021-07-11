import { combineReducers } from 'redux';

import filters from './reducers/filters-reducer';
import productItem from './reducers/product-item-reducer';
import cart from './reducers/cart-reducer';

const rootReducer = combineReducers({
  filters,
  productItem,
  cart,
});

export default rootReducer;
