// filterCars.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredCars: [],
};

export const filterCarsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    updatedFilteredCars: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.filteredCars = action.payload;
    },
  },
});

export const { updatedFilteredCars } = filterCarsSlice.actions;

export default filterCarsSlice.reducer;


