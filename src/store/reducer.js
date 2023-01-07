import { RESTAURANTS_LIST } from '../__mocks__';

const initialState = {
  restaurants: RESTAURANTS_LIST,
  inputValues: {
    name: '',
    category: '',
    location: '',
  },
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
    const { currentInputValues } = action.payload;

    return {
      ...state,
      inputValues: {
        ...state.inputValues,
        currentInputValues,
      },
    };
  }

  return state;
};

export default reducer;
