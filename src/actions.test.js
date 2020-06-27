import {
  updateRestaurantName,
} from './actions';

describe('actions', () => {
  test('updateRestaurantName', () => {
    const name = '레스토랑 이름 업데이트';

    const action = updateRestaurantName(name);

    expect(action.type).toBe('updateRestaurantName');
    expect(action.payload.restaurant.name).toBe('레스토랑 이름 업데이트');
  });
});
