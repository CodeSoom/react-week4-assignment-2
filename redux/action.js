export function updateRestaurant(restaurant) {
  return { type: 'updateRestaurant', payload: { restaurant } };
}

export function updateClassify(classify) {
  return { type: 'updateClassify', payload: { classify } };
}

export function updateAddress(address) {
  return { type: 'updateAddress', payload: { address } };
}

export function addRestaurant() {
  return { type: 'addRestaurant' };
}
