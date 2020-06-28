import reducer from './reducer';

import {
  addRestaurant,
  updateRestaurantField,
  setRestaurants,
} from './actions';

import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('should set restaurants array', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('add restaurant', () => {
    context('with restaurant', () => {
      it('should return with new restaurant', () => {
        const restaurant = {
          id: 101, name: 'Busan Rice', category: 'Korean', address: 'Busan Daeyeon',
        };
        const state = reducer(
          {
            newId: 101, restaurant, restaurants: [],
          },
          addRestaurant(),
        );

        expect(state.restaurants).toHaveLength(1);

        expect(state.restaurants[0].id).not.toBeUndefined();
        expect(state.restaurants[0].id).toBe(101);

        expect(state.restaurants[0].name).toBe('Busan Rice');
        expect(state.newId).toBe(102);
      });
    });

    context('without restaurant', () => {
      it('should return with new restaurant', () => {
        const state = reducer();

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });

  describe('updateRestaurantField', () => {
    it('should change name field', () => {
      const state = reducer({
        restaurant: {
          name: 'name',
          category: 'western',
          address: 'address',
        },
      }, updateRestaurantField({
        name: 'address',
        value: 'Seoul Itaewon',
      }));

      expect(state.restaurant.address).toBe('Seoul Itaewon');
    });
  });
});
