export function updateInput({ name, value }) {
  return (
    {
      type: 'UPDATE_INPUT',
      payload: {
        name,
        value,
      },
    }
  );
}

// export function addSort(sort) {
//   return ({
//     type: 'ADD_SORT',
//     payload: sort,
//   });
// }

// export function addAddress(location) {
//   return ({
//     type: 'ADD_ADDRESS',
//     payload: location,
//   });
// }

export function addRestaurant() {
  return ({
    type: 'ADD_RESTAURANT',
  });
}
