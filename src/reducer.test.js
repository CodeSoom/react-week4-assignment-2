import reducer from './reducer';

describe('reducer', () => {
  describe('add restaurant', () => {
    it('should return with new restaurant', () => {
      const state = reducer();

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurants[0].id).not.toBeUndefined();
      expect(state.restaurants[0].name).toBe('Seoul Pizza');
    });
  });
});
