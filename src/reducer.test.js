import reducer from './reducer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  const previousState = {
    id: 100,
    restaurant: {},
    restaurants: [],
  };

  context('undefined action', () => {
    it('changes nothing', () => {
      const state = reducer();

      expect(state.id).toBe(100);
      expect(state.restaurant).toStrictEqual({});
      expect(state.restaurants).toStrictEqual([]);
    });
  });

  context('updateRestaurantName', () => {
    it('changes restaurant name', () => {
      const state = reducer(previousState, updateRestaurantName('중식이 좋아!'));

      expect(state.restaurant.name).toBe('중식이 좋아!');
    });
  });

  context('updateRestaurantCategory', () => {
    it('changes restaurant category', () => {
      const state = reducer(previousState, updateRestaurantCategory('중식'));

      expect(state.restaurant.category).toBe('중식');
    });
  });

  context('updateRestaurantAddress', () => {
    it('changes restaurant Address', () => {
      const state = reducer(previousState, updateRestaurantAddress('경기도 분당구'));

      expect(state.restaurant.address).toBe('경기도 분당구');
    });
  });

  context('addRestaurant', () => {
    function reduceAddRestaurant(restaurant) {
      return reducer({
        id: 200,
        restaurant,
        restaurants: [],
      }, addRestaurant());
    }

    it('add new restaurant to restaurants', () => {
      const newRestaurant = {
        name: '중식이 좋아!',
        category: '중식',
        address: '경기도 분당구',
      };

      const state = reduceAddRestaurant(newRestaurant);

      expect(state.restaurants[0]).toStrictEqual(newRestaurant);
    });
  });
});
