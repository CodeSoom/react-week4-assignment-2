import reducer from './reducer';

describe('reducer', () => {
  context('with no matched action', () => {
    it('return same state', () => {
      const state = reducer({}, { type: 'test' });

      expect(state).toEqual({});
    });
  });
});
