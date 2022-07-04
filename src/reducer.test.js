import {
  addRestaurant, updateRestaurantAdress, updateRestaurantName, updateRestaurantType,
} from './actions';

import { restaurantAdress, restaurantName, restaurantType } from './fixtures/restaurant';

import reducer from './reducer';

describe('reducer', () => {
  context('state가 없는경우', () => {
    it('아무값도 바뀌지않는다.', () => {
      const state = reducer(undefined, { });

      expect(state).toEqual({
        restaurantName: '',
        restaurantType: '',
        restaurantAdress: '',
        restaurants: [],
      });
    });
  });

  context('state가 있는경우', () => {
    describe('UpdateRestaurantName', () => {
      it('nameInput이 변경이된다', () => {
        const state = reducer({ restaurantName: '' }, updateRestaurantName(restaurantName));

        expect(state.restaurantName).toBe(restaurantName);
      });
    });

    describe('UpdateRestaurantType', () => {
      it('typeInput이 변경이된다', () => {
        const state = reducer({ restaurantType: '' }, updateRestaurantType(restaurantType));

        expect(state.restaurantType).toBe(restaurantType);
      });
    });

    describe('UpdateRestaurantAdress', () => {
      it('adressInput이 변경이된다', () => {
        const state = reducer({ restaurantAdress: '' }, updateRestaurantAdress(restaurantAdress));

        expect(state.restaurantAdress).toBe(restaurantAdress);
      });
    });

    describe('addRestaurant', () => {
      it('restaurant 정보가 추가된다', () => {
        const state = reducer({
          restaurantName,
          restaurantType,
          restaurantAdress,
          restaurants: [],
        }, addRestaurant(1));

        const firstRestaurants = state.restaurants[0];

        expect(state.restaurants).toHaveLength(1);

        expect(firstRestaurants.id).not.toBeUndefined();

        expect(firstRestaurants.id).toBe(1);

        expect(firstRestaurants.name).toBe(restaurantName);

        expect(firstRestaurants.type).toBe(restaurantType);

        expect(firstRestaurants.adress).toBe(restaurantAdress);
      });
    });
  });
});
