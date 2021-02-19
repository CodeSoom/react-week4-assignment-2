import { updateRestaurantInfo } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  const initialState = {
    restaurantList: [],
    restaurantInfo: { name: '', category: '', address: '' },
  };

  function changeState(action) {
    return reducer(initialState, action);
  }
  describe('dafault state', () => {
    it('shold have default state', () => {
      const defaultState = reducer(undefined, '');

      expect(defaultState.restaurantList).toHaveLength(0);
      expect(defaultState.restaurantInfo.name).toBe('');
      expect(defaultState.restaurantInfo.category).toBe('');
      expect(defaultState.restaurantInfo.address).toBe('');
    });
  });
  describe('UPDATE_RESTAURANTINFO', () => {
    it('should change restaurantInfo', () => {
      const restaurantInfo = {
        name: '선정릉역 깐부치킨',
        catagory: '한식',
        address: '서울 강남구 삼성동 37 깐부치킨 선정릉역점',
      };
      const changedState = changeState(updateRestaurantInfo(restaurantInfo));

      expect(changedState.restaurantInfo.name).toBe(restaurantInfo.name);
      expect(changedState.restaurantInfo.catagory).toBe(restaurantInfo.catagory);
      expect(changedState.restaurantInfo.address).toBe(restaurantInfo.address);
    });
  });
});
