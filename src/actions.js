// action types
export const ADD_RESTAURANT = 'ADD_RESTAURANT';

// action creators
function addRestaurant(value) {
  return {
    type: ADD_RESTAURANT,
    payload: value,
  };
}

export default {
  addRestaurant,
};
