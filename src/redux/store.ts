import { createStore } from 'redux';
import rootReducer from './root-reducers';

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// @ts-ignore
window.store = store;

export default store;
