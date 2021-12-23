import reducer, { initialState } from './reducer';

import {
  changeName,
  changeCategory,
  changeAddress,
  addRestaurants,
} from './actions';

describe('reducer', () => {
  it('should return the initial', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('changeName', () => {
    it('should handle CHANGE_NAME', () => {
      const newName = 'new name';
      expect(reducer(initialState, changeName(newName)).name).toBe(newName);
    });
  });

  describe('changeCategory', () => {
    it('should handle CHANGE_CATEGORY', () => {
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
    it('should handle ADD_RESTAURANTS', () => {
      const newRestaurant = {
        name: 'new restaurant',
        category: 'new category',
        address: 'new address',
      };
      expect(
        reducer(initialState, addRestaurants(newRestaurant)).restaurants[0],
      ).toMatchObject(newRestaurant);
    });
  });
});
