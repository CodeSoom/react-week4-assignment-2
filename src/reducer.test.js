import reducer from './reducer';

describe('reducer', () => {
  describe('dafault state', () => {
    it('shold have default state', () => {
      const defaultState = reducer(undefined, '');

      expect(defaultState.restaurantList).toHaveLength(0);
      expect(defaultState.restaurantInfo.name).toBe('');
      expect(defaultState.restaurantInfo.category).toBe('');
      expect(defaultState.restaurantInfo.address).toBe('');
    });
  });
});
