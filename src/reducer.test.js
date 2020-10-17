import reducer from './reducer';

describe('reducer', () => {
  describe('exception', () => {
    const state = reducer(
      undefined, { type: '', payload: {} },
    );

    it('return state', () => {
      expect(state).toBe(state);
    });
  });
});
