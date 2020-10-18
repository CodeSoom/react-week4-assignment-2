import {
  updateRestaurantInfo,
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

  it('초기 restaurantInfoList은 빈 배열로 초기화됩니다.', () => {
    const { restaurantInfoList } = initialState;

    expect(restaurantInfoList).toHaveLength(0);
  });
});

describe('reducer', () => {
  it('잘못된 action을 입력하면 현재 state이 반환합니다.', () => {
    const state = reducer(
      initialState,
      { type: 'incorrectType', payload: { type: '', value: '' } },
    );

    expect(state).toEqual(initialState);
  });

  describe('updateRestaurantInfo', () => {
    it('restaurantInfo name을 업데이트합니다.', () => {
      const { restaurantInfo: { name } } = reducer(
        initialState,
        updateRestaurantInfo({ type: 'name', value: '마녀주방' }),
      );

      expect(name).toBe('마녀주방');
    });

    it('restaurantInfo type을 업데이트합니다.', () => {
      const { restaurantInfo: { type } } = reducer(
        initialState,
        updateRestaurantInfo({ type: 'type', value: '한식' }),
      );

      expect(type).toBe('한식');
    });


    it('restaurantInfo location을 업데이트합니다.', () => {
      const { restaurantInfo: { location } } = reducer(
        initialState,
        updateRestaurantInfo({ type: 'location', value: '서울시 강남구' }),
      );

      expect(location).toBe('서울시 강남구');
    });
  });

  describe('AddRestaurantInfo', () => {
    it('restaurantInfo을 리스트에 추가합니다.', () => {
      const { restaurantInfoList } = reducer(
        initialState,
        addRestaurantInfo({ name: '마녀주방', type: '한식', location: '서울시 강남구' }),
      );

      expect(restaurantInfoList).toHaveLength(1);
      expect(restaurantInfoList[0].name).toBe('마녀주방');
      expect(restaurantInfoList[0].type).toBe('한식');
      expect(restaurantInfoList[0].location).toBe('서울시 강남구');
    });

    it('restaurantInfo가 초기화 됩니다.', () => {
      const { restaurantInfo: { name, type, location } } = reducer({
        restaurantInfo: {
          name: '마녀주방',
          type: '한식',
          location: '서울시 강남구',
        },
        restaurantInfoList: [],
      }, addRestaurantInfo({ name: '마녀주방', type: '한식', location: '서울시 강남구' }));

      expect(name).toBe('');
      expect(type).toBe('');
      expect(location).toBe('');
    });
  });
});
