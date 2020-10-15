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
    it('returns new state with new restaurant added to restaurants', () => {
      const newState = reducer(previousState, addRestaurant());

      expect(newState.newId).toBe(previousState.newId + 1);
      expect(newState.restaurant).toEqual({
        name: '',
        category: '',
        address: '',
      });
      expect(newState.restaurants).toContainEqual({
        ...previousState.restaurant,
        id: previousState.newId,
      });
    });
  });

  describe('updateRestaurant', () => {
    it('returns new state with updated restaurant', () => {
      const updatedRestaurant = {
        name: '마녀식당',
        category: '중식',
        address: '우주',
      };

      Object.entries(updatedRestaurant).forEach(([field, value]) => {
        const newState = reducer(previousState, updateRestaurant(field, value));

        expect(newState.restaurant[field]).toBe(updatedRestaurant[field]);
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
