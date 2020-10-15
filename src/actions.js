// action types
export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const CHANGE_RESTAURANT_INPUT = {
  NAME: 'CHANGE_RESTAURANT_INPUT_NAME',
  TYPE: 'CHANGE_RESTAURANT_INPUT_TYPE',
  PLACE: 'CHANGE_RESTAURANT_INPUT_PLACE',
};

// action creators
function addRestaurant(value) {
  return {
    type: ADD_RESTAURANT,
    payload: value,
  };
}

function changeRestaurantInput(type, value) {
  return {
    type: CHANGE_RESTAURANT_INPUT[type.toUpperCase()],
    payload: value,
  };
}

export default {
  addRestaurant,
  changeRestaurantInput,
};
