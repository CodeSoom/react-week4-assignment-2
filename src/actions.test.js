import { updateRestaurantName } from './actions';

describe('updateRestaurantName', () => {
  it('restaurantInfoName action을 반환합니다.', () => {
    const restaurantName = '마녀주방';

    const action = updateRestaurantName(restaurantName);

    expect(action.type).toBe('updateRestaurantName');
    expect(action.payload).toBe(restaurantName);
  });
});