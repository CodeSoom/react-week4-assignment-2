import reducer from './reducer';
import { updateRestaurant, addRestaurant } from './actions';

describe('reducer', () => {
  const initialState = {
    newId: 103,
    restaurant: {
      name: '키와미',
      category: '일식',
      address: '분당구 정자동',
    },
    restaurants: [],
  };

  describe('addRestaurant', () => {
    it('add restaurant, empty state and update id', () => {
      const state = reducer(initialState, addRestaurant());

      expect(state.newId).toBe(initialState.newId + 1);
      expect(state.restaurant).toEqual({
        name: '',
        category: '',
        address: '',
      });
      expect(state.restaurants).toContainEqual({
        ...initialState.restaurant,
        id: initialState.newId,
      });
    });
  });

  describe('updateRestaurant', () => {
    it('updates value correctly', () => {
      const state = reducer(initialState, updateRestaurant(
        'name',
        '마녀식당',
      ));

      expect(state.restaurant.name).toBe('마녀식당');
    });
  });

  it('returns intial state when state is not defined', () => {
    expect(reducer()).toEqual({
      newId: 100,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [],
    });
  });
});
