import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  registerReservation,
} from './actions';

describe('actions', () => {
  test('updateRestaurantName', () => {
    const name = '레스토랑 이름 업데이트';

    const action = updateRestaurantName(name);

    expect(action.type).toBe('updateRestaurantName');
    expect(action.payload.restaurant.name).toBe(name);
  });

  test('updateRestaurantCategory', () => {
    const category = '레스토랑 카테고리 업데이트';

    const action = updateRestaurantCategory(category);

    expect(action.type).toBe('updateRestaurantCategory');
    expect(action.payload.restaurant.category).toBe(category);
  });

  test('updateRestaurantAddress', () => {
    const address = '레스토랑 주소 업데이트';

    const action = updateRestaurantAddress(address);

    expect(action.type).toBe('updateRestaurantAddress');
    expect(action.payload.restaurant.address).toBe(address);
  });

  test('registerReservation', () => {
    const action = registerReservation();

    expect(action.type).toBe('registerReservation');
    expect(action.payload).toBeUndefined();
  });
});
