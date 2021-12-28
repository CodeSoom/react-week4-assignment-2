import reducer, { initialState } from './reducer';

import {
  changeName,
  changeCategory,
  changeAddress,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  it('returns the initial', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('changeName', () => {
    it('handles CHANGE_NAME', () => {
      const newName = 'new name';
      expect(reducer(initialState, changeName(newName)).name).toBe(newName);
    });
  });

  describe('changeCategory', () => {
    it('handles CHANGE_CATEGORY', () => {
      const newCategory = 'new category';
      expect(reducer(initialState, changeCategory(newCategory)).category).toBe(
        newCategory,
      );
    });
  });

  describe('changeAddress', () => {
    it('should handle CHANGE_ADDRESS', () => {
      const newAddress = 'new address';
      expect(reducer(initialState, changeAddress(newAddress)).address).toBe(
        newAddress,
      );
    });
  });

  describe('addRestaurants', () => {
    it('should handle ADD_RESTAURANT', () => {
      const newRestaurant = {
        name: 'new restaurant',
        category: 'new category',
        address: 'new address',
      };
      expect(
        reducer(initialState, addRestaurant(newRestaurant)).restaurants[0],
      ).toMatchObject(newRestaurant);
    });
  });
});
