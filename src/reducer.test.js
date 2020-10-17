import reducer from './reducer';

describe('reducer', () => {
  describe('state undefined', () => {
    it('returns initial state', () => {
      const { restaurants } = reducer(undefined, {});
      expect(restaurants).toHaveLength(0);
    });
  });

  describe('addRestaurant', () => {
    it('add new restaurant into restaurants', () => {
      const state = reducer(undefined, addRestaurant());
      expect(state).toHaveLength(1);
    });
  });
});
