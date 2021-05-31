import reducer from './reducer';

import {
  setRestaurants,
  changeRestaurantField,
} from './actions';

import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const initialState = {
        restaurants: [],
        restaurant: {},
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('changeRestaurantField', () => {
    it('changes restaurant form', () => {
      const initialState = {
        restaurants,
        restaurant: {
          name: '이름',
          category: '분류',
          address: '주소',
        },
      };

      const state = reducer(initialState, changeRestaurantField({
        name: 'category',
        value: '한식',
      }));

      expect(state.restaurant.category).toBe('한식');
      expect(state.restaurant.name).toBe('이름');
    });
  });
});
