import { combineReducers } from 'redux';

import filtersReducer from './reducers/filters-reducer';
import productItemReducer from './reducers/product-item-reducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  productItem: productItemReducer,
});

export default rootReducer;
