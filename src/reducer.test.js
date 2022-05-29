import addRestaurant from './actions';

import reducer from './reducer';

describe('reducer', () => {
  describe('addRestaurant', () => {
    it('appends a new restaurant into restaurants', () => {
      const restaurant = {
        name: '마녀 주방',
        category: '한식',
        address: '서울시 강남구',
      };

      const state = reducer({
        restaurant,
      }, addRestaurant(restaurant));

      expect(state.restaurant.name).toBe('마녀 주방');
      expect(state.restaurant.category).toBe('한식');
      expect(state.restaurant.address).toBe('서울시 강남구');
    });
  });
});
