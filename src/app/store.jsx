import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/filter/filterCars';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
