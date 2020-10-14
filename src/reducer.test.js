import reducer from './reducer';

test('reducer', () => {
  const state = reducer();

  expect(state.restaurants).toHaveLength(0);
});
