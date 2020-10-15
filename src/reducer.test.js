import reducer from './reducer';

test('reducer', () => {
  const state = reducer();

  expect(state.restaurants).toHaveLength(0);
  expect(state.restaurant.name).toBe('');
  expect(state.placeholders).toHaveLength(3);
});
