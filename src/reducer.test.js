import reducer from './reducer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
} from './actions';

describe('reducer', () => {
  const initialState = {
    id: 1,
    restaurant: {
      name: '',
      category: '',
      address: '',
    },
    reservations: [],
  };

  test('updateRestaurantName', () => {
    const state = reducer(
      initialState,
      updateRestaurantName('롯데리아'),
    );

    expect(state.restaurant.name).toBe('롯데리아');
  });

  test('updateRestaurantCategory', () => {
    const state = reducer(
      initialState,
      updateRestaurantCategory('패스트푸드'),
    );

    expect(state.restaurant.category).toBe('패스트푸드');
  });

  test('updateRestaurantAddress', () => {
    const state = reducer(
      initialState,
      updateRestaurantAddress('서울시 성북구'),
    );

    expect(state.restaurant.address).toBe('서울시 성북구');
  });
});
