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

    it('returns restaurants property', () => {
      expect(reducer(initialState, setRestaurants(restaurants))).toHaveProperty('restaurants');
    });

    it('returns restaurants', () => {
      expect(reducer(initialState, setRestaurants(restaurants)).restaurants).not.toHaveLength(0);
    });
  });
});
