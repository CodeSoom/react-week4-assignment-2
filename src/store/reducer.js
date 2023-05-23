import { emptyInputValues } from '../fixtures/inputValues';
import { RESTAURANTS_LIST } from '../__mocks__';

const initialState = {
  restaurants: RESTAURANTS_LIST,
  inputValues: emptyInputValues,
};

const actionTypes = {
  addNewRestaurant: (state, { newRestaurantForm }) => ({
    ...state,
    restaurants: [
      ...state.restaurants,
      newRestaurantForm,
    ],
  }),

  updateFormInputs: (state, { name, value }) => ({
    ...state,
    inputValues: {
      ...state.inputValues,
      [name]: value,
    },
  }),
};

const reducer = (state = initialState, action) => {
  if (actionTypes[action.type]) {
    return actionTypes[action.type](state, action.payload);
  }

  return state;
};

export default reducer;
