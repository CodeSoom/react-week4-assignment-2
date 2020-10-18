import reducer from './reducer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  describe('update restaurant', () => {
    it('changes a name of restaurant', () => {
      const state = reducer({
        restaurant: {
          name: '',
        },
      }, updateRestaurantName('마녀주방'));

      expect(state.restaurant.name).toBe('마녀주방');
    });

    it('changes a category of restaurant', () => {
      const state = reducer({
        restaurant: {
          category: '',
        },
      }, updateRestaurantCategory('양식'));

      expect(state.restaurant.category).toBe('양식');
    });

    it('changes a address of restaurant', () => {
      const state = reducer({
        restaurant: {
          address: '',
        },
      }, updateRestaurantAddress('강남구 서현동'));

      expect(state.restaurant.address).toBe('강남구 서현동');
    });
  });

  describe('add a new restaurant', () => {
    function reduceAddRestaurant(restaurant) {
      return reducer({
        newId: 100,
        restaurant,
        restaurants: [],
      }, addRestaurant());
    }

    context('with all information of restaurant', () => {
      it('adds a new restaurant', () => {
        const state = reduceAddRestaurant({
          name: '마녀주방', category: '양식', address: '강남구 서현동',
        });

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurant[0].id).not.toBeUndefined();
        expect(state.restaurant[0].name).toBe('마녀주방');
        expect(state.restaurant[0].category).toBe('양식');
        expect(state.restaurant[0].address).toBe('강남구 서현동');
      });
    });

    context('without one of information of restaurant', () => {
      it('nothing happens', () => {
        const state = reduceAddRestaurant();

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });
});
