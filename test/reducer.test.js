import reducer from '../src/reducer';

import {
  setRestaurants,
  changeRestaurantField,
  addRestaurants,
} from '../src/actions';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const initalState = {
        restaurants: [],
      };

      const state = reducer(initalState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('changeRestaurants', () => {
    it('changes restaurants form', () => {
      const initalState = {
        restaurant: {
          name: '이름',
          category: '분류',
          address: '주소',
        },
      };

      const state = reducer(initalState, changeRestaurantField({
        name: 'address',
        value: '서울시 강남구 역삼동',
      }));

      expect(state.restaurant.address).toBe('서울시 강남구 역삼동');
    });
  });
});
