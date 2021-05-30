import reducer from './reducer';

// npx jest --watchAll --verbose

import {
  setRestaurants,
} from './actions';

import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('changes restaurant array', () => {
      const initailState = {
        restaurants: [],
      };

      const state = reducer(initailState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });
});
