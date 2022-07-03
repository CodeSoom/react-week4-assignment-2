import reducer from './reducer';

import { setRestaurants } from './actions';

import restaurants from '../../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('레스토랑 배열이 바뀜', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });
});
