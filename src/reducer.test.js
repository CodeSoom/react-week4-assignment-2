import {
  addRestaurant, updateAddress, updateCategory, updateName,
} from './actions';

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

  describe('updateName', () => {
    it('change the name of restaurant', () => {
      const state = reducer({
        restaurant: { name: '' },
      }, updateName('시카고 피자'));

      expect(state.restaurant.name).toBe('시카고 피자');
    });
  });

  describe('updateCategory', () => {
    it('change the category of restaurant', () => {
      const state = reducer({
        restaurant: { category: '' },
      }, updateCategory('양식'));

      expect(state.restaurant.category).toBe('양식');
    });
  });

  describe('updateAddress', () => {
    it('change the address of restaurant', () => {
      const state = reducer({
        restaurant: { address: '' },
      }, updateAddress('이태원'));

      expect(state.restaurant.address).toBe('이태원');
    });
  });
});
