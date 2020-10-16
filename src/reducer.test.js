import reducer, { initialState } from './reducer';

describe('initialState', () => {
  it('초기 restaurantInfo 객체는 빈칸으로 초기화됩니다.', () => {
    const { name, type, location } = initialState.restaurantInfo;

    expect(name).toBe('');
    expect(type).toBe('');
    expect(location).toBe('');
  });

  it('초기 listRestaurantInfo은 빈 배열로 초기화됩니다.', () => {
    const { listRestaurantInfo } = initialState.listRestaurantInfo;

    expect(listRestaurantInfo).toHaveLength(0);
  });
});

describe('reducer', () => {
  const updateRestaurantName = jest.fn();
  const updateRestaurantType = jest.fn();
  const updateRestaurantLocation = jest.fn();
  const addRestaurantInfo = jest.fn();

  describe('updateRestaurantName', () => {
    it('restaurantName을 반환합니다.', () => {
      const state = reducer({
        restaurantInfo: {
          name: '',
        },
      }, updateRestaurantName('마녀주방'));

      expect(state.restaurantName).toBe('마녀주방');
    });
  });

  describe('updateRestaurantType', () => {
    it('restaurantType을 반환합니다.', () => {
      const state = reducer({
        restaurantInfo: {
          type: '',
        },
      }, updateRestaurantType('한식'));

      expect(state.restaurantType).toBe('한식');
    });
  });

  describe('updateRestaurantLocation', () => {
    it('restaurantLocation을 반환합니다.', () => {
      const state = reducer({
        restaurantInfo: {
          location: '',
        },
      }, updateRestaurantLocation('서울시 강남구'));

      expect(state.restaurantLocation).toBe('서울시 강남구');
    });
  });

  describe('AddRestaurantInfo', () => {
    it('restaurantInfo을 리스트에 추가합니다.', () => {
      const state = reducer({
        restaurantInfo: {
          name: '',
          type: '',
          location: '',
        },
        listRestaurantInfo: [],
      }, addRestaurantInfo({ name: '마녀주방', type: '한식', location: '서울시 강남구' }));

      expect(state.listRestaurantInfo).toHaveLength(1);
      expect(state.listRestaurantInfo[0].name).toBe('마녀주방');
      expect(state.listRestaurantInfo[0].type).toBe('한식');
      expect(state.listRestaurantInfo[0].location).toBe('서울시 강남구');
    });

    it('restaurantInfo가 초기화 됩니다.', () => {
      const state = reducer({
        restaurantInfo: {
          name: '마녀주방',
          type: '한식',
          location: '서울시 강남구',
        },
        listRestaurantInfo: [],
      }, addRestaurantInfo({ name: '마녀주방', type: '한식', location: '서울시 강남구' }));

      expect(state.restaurantInfo.name).toBe('');
      expect(state.restaurantInfo.type).toBe('');
      expect(state.restaurantInfo.location).toBe('');
    });
  });
});
