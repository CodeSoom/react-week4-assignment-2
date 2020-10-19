import {
  updateRestaurantInfo,
  addRestaurantInfo,
} from './actions';

describe('updateRestaurantInfo', () => {
  it('restaurantInfoName action을 반환합니다.', () => {
    const updateInfo = { type: 'name', value: '마녀주방' };

    const action = updateRestaurantInfo(updateInfo);

    expect(action.type).toBe('updateRestaurantInfo');
    expect(action.payload).toEqual(updateInfo);
  });
});

describe('addRestaurantInfo', () => {
  it('addRestaurantInfo action을 반환합니다.', () => {
    const restaurantInfo = {
      name: '마녀주방',
      category: '일식',
      address: '서울시 강남구',
    };

    const action = addRestaurantInfo(restaurantInfo);

    expect(action.type).toBe('addRestaurantInfo');
    Object.keys(restaurantInfo).forEach((key) => {
      expect(action.payload[key]).toBe(restaurantInfo[key]);
    });
  });
});
