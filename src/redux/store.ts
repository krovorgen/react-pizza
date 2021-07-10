import { createStore } from 'redux';
import rootReducer from './root-reducers';

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(() => {
//   console.log(store.getState());
// });
//
(window as any).store = store;

// type RootStateType = ReturnType<typeof rootReducer>;

export default store;
