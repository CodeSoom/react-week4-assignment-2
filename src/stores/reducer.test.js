import reducer from './reducer';
import {
  updateRestaurantName, updateRestaurantCategory, updateRestaurantAddress, addRestaurant,
} from './action/action-creators';

import RESTAURANTS from '../__fixtures__/restaurants.json';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    it('uses initial state', () => {
      const previousState = undefined;
      const nextState = reducer(previousState, { type: 'some-action-type' });
      expect(nextState).not.toBeUndefined();
    });
  });

  context('when action-type is invalid', () => {
    it('do nothing', () => {
      const previousState = {
        someStatePropperty: Math.random() * 10,
      };
      const nextState = reducer(previousState, { type: 'some-invalid-action-type' });
      expect(previousState).toEqual(nextState);
    });
  });

  describe('updateRestaurantInfo', () => {
    it('changes restaurant-name-property', () => {
      const previousState = undefined;
      const newRestaurantName = '레스토랑 이름';
      const nextState = reducer(previousState, updateRestaurantName(newRestaurantName));
      expect(nextState.restaurant.name).toBe(newRestaurantName);
    });
    it('changes restaurant-category-property', () => {
      const previousState = undefined;
      const newRestaurantCategory = '레스토랑 카테고리';
      const nextState = reducer(previousState, updateRestaurantCategory(newRestaurantCategory));
      expect(nextState.restaurant.category).toBe(newRestaurantCategory);
    });
    it('changes restaurant-address-property', () => {
      const previousState = undefined;
      const newRestaurantAddress = '레스토랑 주소';
      const nextState = reducer(previousState, updateRestaurantAddress(newRestaurantAddress));
      expect(nextState.restaurant.address).toBe(newRestaurantAddress);
    });
  });

  describe('addRestaurant', () => {
    context('with restaurant-info', () => {
      it('appends a new-restaurant into restaurants', () => {
        const previousState = {
          restaurants: [],
          restaurant: {
            name: '레스토랑 이름',
            category: '레스토랑 카테고리',
            address: '레스토랑 주소',
          },
        };
        const nextState = reducer(previousState, addRestaurant());
        expect(nextState.restaurants).toHaveLength(1);
        expect(nextState.restaurants[0]).toEqual(previousState.restaurant);
      });
    });

    context('with empty-restaurant', () => {
      it('does not work', () => {
        const previousState = {
          restaurants: RESTAURANTS,
          restaurant: {
            name: '',
            category: '',
            address: '',
          },
        };
        const nextState = reducer(previousState, addRestaurant());
        expect(nextState.restaurants).toEqual(previousState.restaurants);
      });
    });

    context('without restaurant-info', () => {
      it('does not work', () => {
        const previousState = {
          restaurants: RESTAURANTS,
          restaurant: undefined,
        };
        const nextState = reducer(previousState, addRestaurant());
        expect(nextState.restaurants).toEqual(previousState.restaurants);
      });
    });
  });
});
