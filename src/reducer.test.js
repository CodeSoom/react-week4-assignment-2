import reducer from './reducer';

import {
  setRestaurants,
  changeRestaurantField,
  addRestaurant,
} from './actions';

import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const initailState = {
        restaurants: [],
      };

      const state = reducer(initailState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });
  describe('changeRestaurantField', () => {
    it('changes restaurants form', () => {
      const initailState = {
        restaurants: {
          name: '이름',
          category: '분류',
          address: '주소',
        },
      };

      const state = reducer(initailState, changeRestaurantField({
        name: 'address',
        value: '서울시 강남구 역삼동',
      }));

      expect(state.restaurant.address).toBe('서울시 강남구 역삼동');
    });
  });

  describe('addRestaurant', () => {
    it('append restaurant into restaurants and clear restaurants form', () => {
      const initailState = {
        newId: 101,
        restaurants: [],
        restaurant: {
          name: '마법사주방',
          category: '이탈리안',
          address: '서울시 강남구 역삼동',
        },
      };

      const state = reducer(initailState, addRestaurant());

      expect(state.restaurants).toHaveLength(1);

      const restaurant = state.restaurants[state.restaurants.length - 1];
      expect(restaurant.id).toBe(101);
      expect(restaurant.name).toBe('마법사주방'); // 추가

      expect(state.restaurant.name).toBe(''); // 삭제

      expect(state.newId).toBe(102); // 새로운
    });
  });
});
