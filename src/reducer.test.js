import reducer from './reducer';

describe('reducer', () => {
  describe('initialState', () => {
    it('checks initial state', () => {
      const state = reducer(undefined, { type: 'checkInitialState' });

      expect(state).not.toBeUndefined();
      expect(state.newId).not.toBeUndefined();
      expect(state.name).not.toBeUndefined();
      expect(state.type).not.toBeUndefined();
      expect(state.address).not.toBeUndefined();
      expect(state.restaurants).not.toBeUndefined();
    });
  });
});
