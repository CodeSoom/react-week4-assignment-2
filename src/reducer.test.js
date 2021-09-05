import reducer from './reducer';

import { setRestaurants } from './actions';

import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    const initialState = {
      restaurants: [],
    };

    const state = reducer(initialState, setRestaurants(restaurants));

    expect(state).not.toHaveLength(0);
  });
});
