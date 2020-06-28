import reducer from './reducer';

import { addRestaurant } from './actions';

describe('reducer', () => {
  const restaurants = [
    {
      id: 0, name: 'test_0', category: 'test_0_category', address: 'test_0_address',
    },
    {
      id: 1, name: 'test_1', category: 'test_1_category', address: 'test_1_address',
    },
  ];

  context('with no matched action', () => {
    it('return same state', () => {
      const state = reducer({}, { type: 'test' });

      expect(state).toEqual({});
    });
  });

  describe('add restaurant', () => {
    context('when with value on name, category, address', () => {
      it('append a new restaurant into restaurants', () => {
        const state = reducer({
          newId: 3,
          restaurantName: 'test_name',
          restaurantCategory: 'test_category',
          restaurantAddress: 'test_address',
          restaurants,
        }, addRestaurant());

        restaurants.forEach((data, index) => {
          expect(state.restaurants[index].name).toBe(restaurants[index].name);
          expect(state.restaurants[index].category).toBe(restaurants[index].category);
          expect(state.restaurants[index].address).toBe(restaurants[index].address);
        });
      });
      it('clears all value of name, category, address after append a new restaurant', () => {
        const state = reducer({
          newId: 3,
          restaurantName: 'test_name',
          restaurantCategory: 'test_category',
          restaurantAddress: 'test_address',
          restaurants,
        }, addRestaurant());

        expect(state.restaurantName).toBe('');
        expect(state.restaurantCategory).toBe('');
        expect(state.restaurantAddress).toBe('');

        expect(state.restaurants.length).toEqual(3);
      });
    });
    context('when one of blank value about restaurantName, restaurantCategory, restaurantAddress', () => {
      it("doesn't work when restaurantName is blank", () => {
        const state = reducer({
          newId: 3,
          restaurantName: '',
          restaurantCategory: 'test',
          restaurantAddress: 'test',
          restaurants: [],
        }, addRestaurant());

        expect(state.restaurantName).toBe('');
        expect(state.restaurantCategory).not.toBe('');
        expect(state.restaurantAddress).not.toBe('');
        expect(state.restaurants.length).toBe(0);
      });
      it("doesn't work when restaurantaCategory is blank", () => {
        const state = reducer({
          newId: 3,
          restaurantName: 'test',
          restaurantCategory: '',
          restaurantAddress: 'test',
          restaurants: [],
        }, addRestaurant());

        expect(state.restaurantName).not.toBe('');
        expect(state.restaurantCategory).toBe('');
        expect(state.restaurantAddress).not.toBe('');
        expect(state.restaurants.length).toBe(0);
      });
      it("doesn't work when restaurantaAddress is blank", () => {
        const state = reducer({
          newId: 3,
          restaurantName: 'test',
          restaurantCategory: 'test',
          restaurantAddress: '',
          restaurants: [],
        }, addRestaurant());

        expect(state.restaurantName).not.toBe('');
        expect(state.restaurantCategory).not.toBe('');
        expect(state.restaurantAddress).toBe('');
        expect(state.restaurants.length).toBe(0);
      });
    });
  });
});
