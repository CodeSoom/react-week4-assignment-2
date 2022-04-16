import reducer from './reducer';

import { setRestaurants } from './actions';

import restaurants from '../fixtures/restaurants';

describe('Reducer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('setRestaurants', () => {
    const initialState = {
      restaurants: [],
    };

    it('returns restaurants', () => {
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });
});
