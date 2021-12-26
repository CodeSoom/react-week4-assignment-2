import toActionObject from './toActionObject';
import ActionType from './ActionType';

export function updateName(name) {
  return toActionObject(ActionType.UPDATE_NAME, {
    name,
  });
}

export function updateCategory(category) {
  return toActionObject(ActionType.UPDATE_CATEGORY, {
    category,
  });
}

export function updateAddress(address) {
  return toActionObject(ActionType.UPDATE_ADDRESS, {
    address,
  });
}

export function addRestaurant() {
  return toActionObject(ActionType.ADD_RESTAURANT);
}
