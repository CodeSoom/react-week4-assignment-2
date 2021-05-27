import reducer from './reducer';

import {
  updateName, updateCategory, updateAddress,
} from './actions';

describe('reduecer', () => {
  describe('updateName', () => {
    it('새로운 restaurant(상태)가 만들어지고 새로운 name으로 변경된다', () => {
      // given
      const previouRestaurant = {
        name: '',
        restaurants: [],
      };
      // when
      const restaurant = reducer(previouRestaurant, updateName('마녀주방'));
      // then
      expect(restaurant.name).toBe('마녀주방');
    });
  });

  describe('updateCategory', () => {
    it('새로운 restaurant(상태)가 만들어지고 새로운 category로 변경된다', () => {
      // given
      const previouRestaurant = {
        cartegory: '',
        restaurants: [],
      };
      // when
      const restaurant = reducer(previouRestaurant, updateCategory('한식'));
      // then
      expect(restaurant.category).toBe('한식');
    });
  });

  describe('updateAddress', () => {
    it('새로운 restaurant(상태)가 만들어지고 새로운 address로 변경된다', () => {
      // given
      const previouRestaurant = {
        address: '',
        restaurants: [],
      };
      // when
      const restaurant = reducer(previouRestaurant, updateAddress('서울시 강남구'));
      // then
      expect(restaurant.address).toBe('서울시 강남구');
    });
  });

  describe('addRestaurant', () => {
    it('restaurants에 새로운 restaurant(상태)을 추가되어야 한다', () => {
      // given
      const previouRestaurant = {
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
        restaurants: [],
      };
      const action = {
        type: 'addRestaurant',
      };
      // when
      const restaurant = reducer(previouRestaurant, action);
      // then
      expect(restaurant.restaurants[0].name).toBe('마녀주방');
      expect(restaurant.restaurants[0].category).toBe('한식');
      expect(restaurant.restaurants[0].address).toBe('서울시 강남구');
    });
  });

  describe('no action type', () => {
    it('상태값이 그대로 반환된다', () => {
      // given
      const previouRestaurant = {
        name: '',
        restaurants: [],
      };
      const action = {};
      // when
      const restaurant = reducer(previouRestaurant, action);
      // then
      expect(restaurant.name).toBe('');
    });

    it('상태값이 없으면 초기값으로 반환된다', () => {
      // given
      // when
      const restaurant = reducer();
      // then
      expect(restaurant.name).toBe('');
    });
  });
});
