import reducer from './reducer';

import {
  setRestaurants,
} from './actions';

import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  it('setRestaurants', () => {
    const initialState = {
      restaurnats: [],
    };

    const state = reducer(initialState, setRestaurants(restaurants));

    expect(state.restaurants).not.toHaveLength(0);
  });
});
