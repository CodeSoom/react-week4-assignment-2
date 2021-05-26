import reducer from './reducer';

import { changeName } from './actions';

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

  describe('changeName', () => {
    it('changes name', () => {
      const state = reducer(undefined, changeName('뽀식이'));

      expect(state.name).toBe('뽀식이');
    });
  });
});
