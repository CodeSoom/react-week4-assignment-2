import reducer from './reducer';

describe('Reducer', () => {
  const state = {};
  it('Runs', () => {
    expect(reducer(state)).toEqual(state);
  });
});
