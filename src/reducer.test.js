import { addRestaurant, updateRestaurantInfo } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  const restaurantInfo = {
    id: 0,
    name: '선정릉역 깐부치킨',
    catagory: '한식',
    address: '서울 강남구 삼성동 37 깐부치킨 선정릉역점',
  };
  describe('dafault state', () => {
    it('shold have default state', () => {
      const defaultState = reducer(undefined, '@@INIT');

      expect(defaultState.restaurantList).toHaveLength(0);
      expect(defaultState.restaurantInfo.name).toBe('');
      expect(defaultState.restaurantInfo.category).toBe('');
      expect(defaultState.restaurantInfo.address).toBe('');
    });
  });
  describe('UPDATE_RESTAURANTINFO', () => {
    it('should change restaurantInfo', () => {
      const changedState = reducer(undefined, updateRestaurantInfo(restaurantInfo));

      expect(changedState.restaurantInfo.name).toBe(restaurantInfo.name);
      expect(changedState.restaurantInfo.catagory).toBe(restaurantInfo.catagory);
      expect(changedState.restaurantInfo.address).toBe(restaurantInfo.address);
    });
  });
  describe('ADD_RESTAURANT', () => {
    it('should be able to add a restaurant list', () => {
      const previousState = {
        restaurantList: [],
        restaurantInfo,
      };

      const changedState = reducer(previousState, addRestaurant());

      expect(changedState.restaurantList).toHaveLength(1);
      expect(changedState.restaurantList[0].id).toBe(1);
      expect(changedState.restaurantList[0].name).toBe(previousState.restaurantInfo.name);
      expect(changedState.restaurantList[0].category).toBe(previousState.restaurantInfo.category);
      expect(changedState.restaurantList[0].address).toBe(previousState.restaurantInfo.address);
    });
  });
});
