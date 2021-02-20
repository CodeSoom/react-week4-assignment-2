import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newId: 100,
  restaurants: [],
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
};
const { actions, reducer } = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
    changeRestaurant: (state, { payload: { name, value } }) => ({
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    }),
  },
});

export const {
  changeRestaurant,
} = actions;

export default reducer;
