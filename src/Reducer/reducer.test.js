import reducer from './reducer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  addRestaurant,
} from '../Action/actions';

describe('reducer', () => {
  const testRestaurant = {
    name: '버튼업', category: '경양식', address: '마포구',
  };

  describe('updateRestaurantName', () => {
    context('when input restaurant name', () => {
      it('change restaurant name', () => {
        const state = reducer({
          restaurant: {
            name: '', category: '', address: '',
          },
        }, updateRestaurantName(testRestaurant.name));

        expect(state.restaurant.name).toBe(testRestaurant.name);
      });
    });
  });

  describe('updateRestaurantCategory', () => {
    context('when input restaurant cateogory', () => {
      it('change restaurant category', () => {
        const state = reducer({
          restaurant: {
            name: '', category: '', address: '',
          },
        }, updateRestaurantCategory(testRestaurant.category));

        expect(state.restaurant.category).toBe(testRestaurant.category);
      });
    });
  });

  describe('updateRestaurantAddress', () => {
    context('when input restaurant address', () => {
      it('change restaurant address', () => {
        const state = reducer({
          restaurant: {
            name: '', category: '', address: '',
          },
        }, updateRestaurantAddress(testRestaurant.address));

        expect(state.restaurant.address).toBe(testRestaurant.address);
      });
    });
  });

  describe('addRestaurant', () => {
    context('with restaurant infomation', () => {
      it('add a new restaurant into restaurants', () => {
        const state = reducer({
          newId: 20,
          restaurant: testRestaurant,
          restaurants: [],
        }, addRestaurant());

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).not.toBeUndefined();
        expect(state.restaurants[0].name).toBe(testRestaurant.name);
        expect(state.restaurants[0].category).toBe(testRestaurant.category);
        expect(state.restaurants[0].address).toBe(testRestaurant.address);
      });
    });
  });
});
