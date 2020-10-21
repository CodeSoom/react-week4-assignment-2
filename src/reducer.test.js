import reducer from './reducer';

import { changeRestaurantField, setRestaurants } from './actions';

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
        name: 'name',
        value: '마법사주방',
      }));

      expect(state.restaurant.name).toBe('마법사주방');
    });
  });
});
