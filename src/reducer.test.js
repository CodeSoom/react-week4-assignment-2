import reducer from './reducer';

describe('reducer', () => {
  describe('without parameter', () => {
    const newState = reducer();

    it('restaurants is empty', () => {
      expect(newState.restaurants).toHaveLength(0);
    });
  });
});
