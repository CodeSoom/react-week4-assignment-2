// action types
export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const CHANGE_RESTAURANT_FIELD = 'CHANGE_RESTAURANT_FIELD';

// action creators
function addRestaurant(value) {
  return {
    type: ADD_RESTAURANT,
    payload: value,
  };
}

function changeRestaurantField(name, value) {
  return {
    type: CHANGE_RESTAURANT_FIELD,
    payload: { name: value },
  };
}

export default {
  addRestaurant,
  changeRestaurantField,
};
