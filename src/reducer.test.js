import reducer from './reducer';

import setRestuarants from './actions';

describe('reducer', () => {
  describe('setRestuarants', () => {
    it('returns previous state', () => {
      const prevState = { restaurnts: [] };
      const state = reducer(prevState, setRestuarants());
      expect(state).toBe(prevState);
    });
  });
});
