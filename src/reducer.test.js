import reducer from './reducer';
import { restaurant } from './fixtures/restaurant';
import { addRestaurant, changeForm } from './actions';

describe('reducer', () => {
  test('addRestaurant', () => {
    const initialState = {
      newId: 1,
      restaurants: [],
    };

    const state = reducer(initialState, addRestaurant({
      title: '홍콩반점',
      menu: '중식',
      address: '서울',
    }));

    expect(state.restaurants).toHaveLength(1);
    expect(state.restaurants[0].id).toBe(initialState.newId + 1);
  });

  test('changeForm', () => {
    const initialState = {
      restaurant,
    };

    const state = reducer(initialState, changeForm({
      title: '뉴욕반점',
    }));

    expect(state.restaurant.title).toBe('뉴욕반점');
  });

  test('default', () => {
    const state = reducer({}, { type: '' });

    expect(state).toEqual({});
  });
});
