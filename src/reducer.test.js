import reducer from './reducer';
import { updateRestaurant, addRestaurant } from './actions';

describe('reducer', () => {
  const previousState = {
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
      const state = reducer(previousState, addRestaurant());

      expect(state.newId).toBe(previousState.newId + 1);
      expect(state.restaurant).toEqual({
        name: '',
        category: '',
        address: '',
      });
      expect(state.restaurants).toContainEqual({
        ...previousState.restaurant,
        id: previousState.newId,
      });
    });
  });

  describe('updateRestaurant', () => {
    it('update each field', () => {
      const restaurant = {
        name: '마녀식당',
        category: '중식',
        address: '우주',
      };

      Object.entries(restaurant).forEach(([field, value]) => {
        const state = reducer(previousState, updateRestaurant(field, value));

        expect(state.restaurant[field]).toBe(restaurant[field]);
      });
    });
  });

  it('returns intial state when state is not defined', () => {
    const initialState = {
      newId: 100,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [],
    };

    expect(reducer()).toEqual(initialState);
  });
});
