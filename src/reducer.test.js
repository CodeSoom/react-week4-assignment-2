import reducer from './reducer';

import {addRestaurants, changeAddress, changeName, changeType} from './actions';

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

  describe('changeType', () => {
    it('changes type', () => {
      const state = reducer(undefined, changeType('한식'));

      expect(state.type).toBe('한식');
    });
  });

  describe('changeAddress', () => {
    it('changes address', () => {
      const state = reducer(undefined, changeAddress('경기도 양평군'));

      expect(state.address).toBe('경기도 양평군');
    });
  });

  describe('addRestaurants', () => {
    context('with name, type, address', () => {
      const state = reducer(undefined, addRestaurants());

      expect(state.restaurants).toHaveLength(2);
      expect(state.name).toBe('');
      expect(state.type).toBe('');
      expect(state.address).toBe('');
    });

    context('without name, type, address', () => {
      const state = reducer(undefined, addRestaurants());

      expect(state.restaurants).toHaveLength(1);
    });
  });
});
