import reducer from './reducer';

describe('reducer', () => {
  describe('undefined action', () => {
    it('changes nothing', () => {
      const initalRestaurants = [];

      const state = reducer();

      expect(state.restaurants).toStrictEqual(initalRestaurants);
    });
  });
});
