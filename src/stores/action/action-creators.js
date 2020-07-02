import { UPDATE_RESTAURANT_INFO, ADD_RESTAURANT } from './action-types';

export function updateRestaurantInfo(property, value) {
  return {
    type: UPDATE_RESTAURANT_INFO,
    payload: { property, value },
  };
}

export function addRestaurant() {
  return {
    type: ADD_RESTAURANT,
  };
}
