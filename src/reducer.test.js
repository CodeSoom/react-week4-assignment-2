import reducer, { initialState } from './reducer';

describe('reducer', () => {
  describe('noType', () => {
    it('renders initial state', () => {
      const state = reducer();

      expect(state).toBe(initialState);
    });
  });
});
