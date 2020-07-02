import { UPDATE_RESTAURANT_INFO, ADD_RESTAURANT } from './action-types';

export function updateRestaurantName(name) {
  return {
    type: UPDATE_RESTAURANT_INFO,
    payload: {
      restaurant: { name },
    },
  };
}

export function updateRestaurantCategory(category) {
  return {
    type: UPDATE_RESTAURANT_INFO,
    payload: {
      restaurant: { category },
    },
  };
}

export function updateRestaurantAddress(address) {
  return {
    type: UPDATE_RESTAURANT_INFO,
    payload: {
      restaurant: { address },
    },
  };
}

export function addRestaurant() {
  return {
    type: ADD_RESTAURANT,
  };
}
