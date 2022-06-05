import { addRestaurant, updateRestaurant } from './actions';

import reducer from './reducer';

import restaurant from '../fixtures/restaurant';

describe('reducer', () => {
  describe('addRestaurant', () => {
    context('with name, category, address', () => {
      it('appends a new restaurant into restaurants', () => {
        const state = reducer({
          restaurant,
          restaurants: [],
        }, addRestaurant());

        expect(state.restaurants).toHaveLength(1);

        expect(state.restaurant.name).toBe('');
        expect(state.restaurant.category).toBe('');
        expect(state.restaurant.address).toBe('');

        expect(state.restaurants[0].name).toBe('마녀 주방');
        expect(state.restaurants[0].category).toBe('한식');
        expect(state.restaurants[0].address).toBe('서울시 강남구');
      });
    });

    context('without name', () => {
      it("doesn't change the restaurants", () => {
        const restaurants = [];

        const state = reducer({
          restaurant: {
            name: '',
            category: '한식',
            address: '서울시 강남구',
          },
          restaurants: [],
        }, addRestaurant());

        expect(state.restaurants.length).toBe(restaurants.length);
      });
    });

    context('without category', () => {
      it("doesn't change the restaurants", () => {
        const restaurants = [];

        const state = reducer({
          restaurant: {
            name: '마녀 주방',
            category: '',
            address: '서울시 강남구',
          },
          restaurants: [],
        }, addRestaurant());

        expect(state.restaurants.length).toBe(restaurants.length);
      });
    });

    context('without address', () => {
      it("doesn't change the restaurants", () => {
        const restaurants = [];

        const state = reducer({
          restaurant: {
            name: '마녀 주방',
            category: '한식',
            address: '',
          },
          restaurants: [],
        }, addRestaurant());

        expect(state.restaurants.length).toBe(restaurants.length);
      });
    });
  });

  describe('updateRestaurant', () => {
    it('change the property of restaurant', () => {
      const state = reducer({
        restaurant: { name: '' },
      }, updateRestaurant({ name: 'name', value: '시카고 피자' }));

      expect(state.restaurant.name).toBe('시카고 피자');
    });
  });

  describe('invalid action', () => {
    it('returns previous state', () => {
      const state = reducer({
        restaurant: { name: '시카고 피자' },
        restaurants: [],
      }, { type: '' });

      expect(state.restaurant.name).toBe('시카고 피자');
      expect(state.restaurants).toHaveLength(0);
    });
  });

  describe('empty state', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: '' });

      expect(state.restaurants).toHaveLength(0);
      expect(state.restaurant.name).toBe('');
      expect(state.restaurant.category).toBe('');
      expect(state.restaurant.address).toBe('');
    });
  });
});
