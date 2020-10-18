// action types
export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const CHANGE_RESTAURANT_FIELD = 'CHANGE_RESTAURANT_FIELD';

// action creators
export function addRestaurant(value) {
  return {
    type: ADD_RESTAURANT,
    payload: value,
  };
}

export function changeRestaurantField(name, value) {
  return {
    type: CHANGE_RESTAURANT_FIELD,
    payload: { [name]: value },
  };
}
