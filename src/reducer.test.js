import {
  addRestaurant, UpdateRestaurantAdress, UpdateRestaurantName, UpdateRestaurantType,
} from './actions';

import { restaurantAdress, restaurantName, restaurantType } from './fixtures/restaurant';

import reducer from './reducer';

describe('reducer', () => {
  context('state가 없는경우', () => {
    it('아무값도 바뀌지않는다.', () => {
      const state = reducer(undefined, { });

      expect(state).toEqual({
        nameInput: '',
        typeInput: '',
        adressInput: '',
        restaurants: [],
      });
    });
  });

  context('state가 있는경우', () => {
    describe('UpdateRestaurantName', () => {
      it('nameInput이 변경이된다', () => {
        const state = reducer({ nameInput: '' }, UpdateRestaurantName(restaurantName));

        expect(state.nameInput).toBe(restaurantName);
      });
    });

    describe('UpdateRestaurantType', () => {
      it('typeInput이 변경이된다', () => {
        const state = reducer({ typeInput: '' }, UpdateRestaurantType(restaurantType));

        expect(state.typeInput).toBe(restaurantType);
      });
    });

    describe('UpdateRestaurantAdress', () => {
      it('adressInput이 변경이된다', () => {
        const state = reducer({ adressInput: '' }, UpdateRestaurantAdress(restaurantAdress));

        expect(state.adressInput).toBe(restaurantAdress);
      });
    });

    describe('addRestaurant', () => {
      it('restaurant 정보가 추가된다', () => {
        const state = reducer({
          nameInput: restaurantName,
          typeInput: restaurantType,
          adressInput: restaurantAdress,
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
