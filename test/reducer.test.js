import reducer from '../src/reducer';

import {
  setRestaurants,
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
});
