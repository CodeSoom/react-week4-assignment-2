import reducer from './reducer';

describe('reducer', () => {
  describe('addRestaurant', () => {
    it('returns new state with new restaurant added to restaurants', () => {
      const previousState = {
        newId: 103,
        restaurant: {
          name: '키와미',
          category: '일식',
          address: '분당구 정자동',
        },
        restaurants: [],
      };

      const action = { type: 'addRestaurant' };

      const newState = reducer(previousState, action);

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

      const previousState = {
        newId: 103,
        restaurant: {
          name: '키와미',
          category: '일식',
          address: '분당구 정자동',
        },
        restaurants: [],
      };

      Object.entries(updatedRestaurant).forEach(([field, value]) => {
        const action = {
          type: 'updateRestaurant',
          payload: { field, value },
        };

        const newState = reducer(previousState, action);

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
