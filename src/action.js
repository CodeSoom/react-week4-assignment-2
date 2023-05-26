export function addName(name) {
  return (
    {
      type: 'ADD_NAME',
      payload: name,
    }
  );
}

export function addSort(sort) {
  return ({
    type: 'ADD_SORT',
    payload: sort,
  });
}

export function addAddress(address) {
  return ({
    type: 'ADD_ADDRESS',
    payload: address,
  });
}

export function addRestaurant() {
  return ({
    type: 'ADD_RESTAURANT',
  });
}
