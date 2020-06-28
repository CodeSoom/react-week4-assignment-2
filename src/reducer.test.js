import reducer from './reducer';

import { addRestaurant, updateRestaurantField } from './actions';

describe('reducer', () => {
  describe('add restaurant', () => {
    context('with restaurant', () => {
      it('should return with new restaurant', () => {
        const restaurant = {
          name: 'Seoul Pizza', type: 'Western', address: 'Seoul Itaewon',
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

        expect(state.restaurants[0].name).toBe('Seoul Pizza');
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
          type: 'western',
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
