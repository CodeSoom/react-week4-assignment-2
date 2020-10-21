import reducer from './reducer';

import {
  changeRestaurantField,
  setRestaurants,
} from './actions';

import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const initialState = {
        restaurants: [],
      };
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('changeRestaurantField', () => {
    it('changes restaurant form', () => {
      const initialState = {
        restaurant: {
          name: '이름',
          category: '분류',
          address: '주소',
        },
      };

      const state = reducer(initialState, changeRestaurantField({
        name: 'address',
        value: '서울시 강남구 역삼동',
      }));

      expect(state.restaurant.name).toBe('서울시 강남구 역삼동');
    });
  });

  describe('addRestaurant', () => {
    it('appends restaurant into restaurants and clear restaurant form', () => {
      const initialState = {
        restaurants: [],
        restaurant: {
          name: '마법사 주방',
          category: '이탈리안',
          address: '서울시 강남구 역삼동',
        },
      };

      const state = reducer(initialState, addRestaurant({}));

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurant.name).toBe('');
    });
  });
});
