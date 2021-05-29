export function setRestaurants(restaurants) {
  return {
    type: 'restaurants/setRestaurants',
    payload: { restaurants },
  };
}

export function addRestaurant() {
  return {
    type: 'restaurants/addRestaurant',
  };
}

export function changeRestaurant({ name, value }) {
  return {
    type: 'restaurants/changeRestaurant',
    payload: {
      name,
      value,
    },
  };
}
