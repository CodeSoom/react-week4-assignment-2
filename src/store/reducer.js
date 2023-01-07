import { emptyInputValues } from '../fixtures/inputValues';
import { RESTAURANTS_LIST } from '../__mocks__';

const initialState = {
  restaurants: RESTAURANTS_LIST,
  inputValues: emptyInputValues,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'addNewRestaurant') {
    const { newRestaurantForm } = action.payload;

    return {
      ...state,
      restaurants: [
        ...state.restaurants,
        newRestaurantForm,
      ],
    };
  }

  if (action.type === 'updateFormInputs') {
    const { name, value } = action.payload;

    return {
      ...state,
      inputValues: {
        ...state.inputValues,
        [name]: value,
      },
    };
  }

  return state;
};

export default reducer;
