export const INIT_REDUX = '@@INIT';
export const UPDATE_RESTAURANTINFO = 'UPDATE_RESTAURANTINFO';
export const ADD_RESTAURANT = 'ADD_RESTAURANT';

export function updateRestaurantInfo(restaurantInfo) {
  return { type: UPDATE_RESTAURANTINFO, payload: restaurantInfo };
}

export function addRestaurant() {
  return { type: ADD_RESTAURANT };
}
