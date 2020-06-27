import { registerRestaurant, updateInput } from './actions';

test('create registerRestaurant action', () => {
  // when
  const action = registerRestaurant();
  // then
  expect(action.type).toBe('registerRestaurant');
  expect(action.payload).toEqual({});
});

test('create updateInput action', () => {
  // given
  const inputValue = {
    name: 'name',
    value: '시카고피자',
  };
  // when
  const action = updateInput(inputValue);
  // then
  expect(action.type).toBe('updateInput');
  expect(action.payload).toBe(inputValue);
});
