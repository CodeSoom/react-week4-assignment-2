export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}

// export function changeRestaurantName(restaurantName) {
//   return {
//     type: 'changeRestaurantName',
//     payload: {
//       restaurantName,
//     },
//   };
// }

// export function changeRestaurantCategory(restaurantCategory) {
//   return {
//     type: 'changeRestaurantCategory',
//     payload: {
//       restaurantCategory,
//     },
//   };
// }

// export function changeRestaurantAddress(restaurantAddress) {
//   return {
//     type: 'changeRestaurantAddress',
//     payload: {
//       restaurantAddress,
//     },
//   };
// }

export function changeRestaurantField({ name, value }) {
  return {
    type: 'changeRestaurantField',
    payload: {
      name,
      value,
    },
  };
}
