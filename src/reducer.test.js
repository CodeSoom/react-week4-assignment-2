import reducer from './reducer';

describe('reducer', () => {
  describe('initialState', () => {
    it('checks initial state', () => {
      const state = reducer(undefined, { type: 'checkInitialState'});

      expect(state).not.toBeUndefined();
    });
  });
});
