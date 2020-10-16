import reducer from './reducer';

import {
  updateRestaurant,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  const previousState = {
    id: 100,
    restaurant: {
      name: '',
      category: '',
      address: '',
    },
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

  context('changing restaurant name', () => {
    it('called updateRestaurant with restaurant name', () => {
      const state = reducer(
        previousState,
        updateRestaurant('name', '시카고피자'),
      );

      expect(state.restaurant.name).toBe('name');
      expect(state.restaurant.value).toBe('시카고피자');
    });
  });

  context('changing restaurant category', () => {
    it('called updateRestaurant with restaurant category', () => {
      const state = reducer(
        previousState,
        updateRestaurant('category', '양식'),
      );

      expect(state.restaurant.name).toBe('category');
      expect(state.restaurant.value).toBe('양식');
    });
  });

  context('changing restaurant address', () => {
    it('called updateRestaurant with restaurant address', () => {
      const state = reducer(
        previousState,
        updateRestaurant('address', '이태원동'),
      );

      expect(state.restaurant.name).toBe('address');
      expect(state.restaurant.value).toBe('이태원동');
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
        name: '시카고피자',
        category: '양식',
        address: '이태원동',
      };

      const state = reduceAddRestaurant(newRestaurant);

      expect(state.restaurants[0]).toStrictEqual(newRestaurant);
    });
  });
});
