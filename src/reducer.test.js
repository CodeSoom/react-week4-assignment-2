import reducer from './reducer';

describe('reducer', () => {
  describe('state undefined', () => {
    it('returns initial state', () => {
      const { restaurants } = reducer(undefined, {});
      expect(restaurants).toHaveLength(0);
    });
  });
});
