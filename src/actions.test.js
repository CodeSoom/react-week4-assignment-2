import { updateRestaurantName, updateRestaurantType, updateRestaurantLocation, addRestaurantInfo } from './actions';

describe('updateRestaurantName', () => {
  it('restaurantInfoName action을 반환합니다.', () => {
    const restaurantName = '마녀주방';

    const action = updateRestaurantName(restaurantName);

    expect(action.type).toBe('updateRestaurantName');
    expect(action.payload).toBe(restaurantName);
  });
});

describe('updateRestaurantType', () => {
  it('restaurantInfoType action을 반환합니다.', () => {
    const restaurantType = '한식';

    const action = updateRestaurantType(restaurantType);

    expect(action.type).toBe('updateRestaurantType');
    expect(action.payload).toBe(restaurantType);
  });
});

describe('updateRestaurantLocation', () => {
  it('restaurantInfoLocation action을 반환합니다.', () => {
    const restaurantLocation = '서울시 강남구';

    const action = updateRestaurantLocation(restaurantLocation);

    expect(action.type).toBe('updateRestaurantLocation');
    expect(action.payload).toBe(restaurantLocation);
  });
});

describe('addRestaurantInfo', () => {
  it('addRestaurantInfo action을 반환합니다.', () => {
    const restaurantInfo = {
      name: '마녀주방',
      type: '일식',
      location: '서울시 강남구',
    };

    const action = addRestaurantInfo(restaurantInfo);

    expect(action.type).toBe('addRestaurantInfo');
    Object.keys(restaurantInfo).forEach((key) => {
      expect(action.payload[key]).toBe(restaurantInfo[key]);
    });
  });
});
