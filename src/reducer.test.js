import reducer from './reducer';

import { setRestaurants } from './actions';

import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('sets initial state', () => {
      const initialState = {
        restaurants: [],
      };
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });
});
