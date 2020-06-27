import reducer from './reducer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  registerReservation,
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

  describe('registerReservation', () => {
    context('with restaurant', () => {
      const state = reducer(
        {
          id: 1,
          restaurant: {
            name: '교촌',
            category: '한식',
            address: '서울시 중구',
          },
          reservations: [],
        },
        registerReservation(),
      );
  
      expect(state.reservations).toHaveLength(1);
      expect(state.reservations[0].id).not.toBeUndefined();
      expect(state.reservations[0].restaurant.name).toBe('교촌');
      expect(state.reservations[0].restaurant.category).toBe('한식');
      expect(state.reservations[0].restaurant.address).toBe('서울시 중구');
      expect(state.restaurant.name).toBe('');
      expect(state.restaurant.category).toBe('');
      expect(state.restaurant.address).toBe('');
    });

    context('without restaurant', () => {
      const state = reducer({
        id: 1,
        restaurant: {
          name: '',
          category: '',
          address: '',
        },
        reservations: [],
      },
      registerReservation());

      expect(state.reservations).toHaveLength(0);
    });
  });
});
