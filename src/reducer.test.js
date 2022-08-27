import reducer from './reducer';

describe('reducer', () => {
  it('returns initial state at initial situation', () => {
    const state = reducer(undefined, {});

    expect(state.retaurants).toHaveLength(0);
  });
});
