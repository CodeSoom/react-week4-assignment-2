import reducer from './reducer';

import { addRestaurant } from './actions';

describe('reducer', () => {
  describe('state undefined', () => {
    it('returns initial state', () => {
      const { restaurants } = reducer(undefined, {});
      expect(restaurants).toHaveLength(0);
    });
  });

  describe('addRestaurant', () => {
    it('add new restaurant into restaurants', () => {
      const state = reducer({
        name: '마녀주방',
        category: '한식',
        location: '서울시 강남구',
        restaurants: [],
      }, addRestaurant());
      expect(state.restaurants).toHaveLength(1);
    });
  });
});
