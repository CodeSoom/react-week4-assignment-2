import {
  updateRestaurantName,
  updateRestaurantType,
  updateRestaurantLocation,
  addRestaurantInfo,
} from './actions';
import reducer, { initialState } from './reducer';

describe('initialState', () => {
  it('초기 restaurantInfo 객체는 빈칸으로 초기화됩니다.', () => {
    const { name, type, location } = initialState.restaurantInfo;

    expect(name).toBe('');
    expect(type).toBe('');
    expect(location).toBe('');
  });

  it('초기 listRestaurantInfo은 빈 배열로 초기화됩니다.', () => {
    const { listRestaurantInfo } = initialState;

    expect(listRestaurantInfo).toHaveLength(0);
  });
});

describe('reducer', () => {
  describe('updateRestaurantName', () => {
    it('restaurantName을 반환합니다.', () => {
      const { restaurantInfo: { name } } = reducer(
        initialState,
        updateRestaurantName('마녀주방'),
      );

      expect(name).toBe('마녀주방');
    });
  });

  describe('updateRestaurantType', () => {
    it('restaurantType을 반환합니다.', () => {
      const { restaurantInfo: { type } } = reducer(
        initialState,
        updateRestaurantType('한식'),
      );

      expect(type).toBe('한식');
    });
  });

  describe('updateRestaurantLocation', () => {
    it('restaurantLocation을 반환합니다.', () => {
      const { restaurantInfo: { location } } = reducer(
        initialState,
        updateRestaurantLocation('서울시 강남구'),
      );

      expect(location).toBe('서울시 강남구');
    });
  });

  describe('AddRestaurantInfo', () => {
    it('restaurantInfo을 리스트에 추가합니다.', () => {
      const { listRestaurantInfo } = reducer(
        initialState,
        addRestaurantInfo({ name: '마녀주방', type: '한식', location: '서울시 강남구' }),
      );

      expect(listRestaurantInfo).toHaveLength(1);
      expect(listRestaurantInfo[0].name).toBe('마녀주방');
      expect(listRestaurantInfo[0].type).toBe('한식');
      expect(listRestaurantInfo[0].location).toBe('서울시 강남구');
    });

    it('restaurantInfo가 초기화 됩니다.', () => {
      const { restaurantInfo: { name, type, location } } = reducer({
        restaurantInfo: {
          name: '마녀주방',
          type: '한식',
          location: '서울시 강남구',
        },
        listRestaurantInfo: [],
      }, addRestaurantInfo({ name: '마녀주방', type: '한식', location: '서울시 강남구' }));

      expect(name).toBe('');
      expect(type).toBe('');
      expect(location).toBe('');
    });
  });
});
