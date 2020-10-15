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
});
