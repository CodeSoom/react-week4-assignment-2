import {
  addRestaurant, updateAddress, updateCategory, updateName,
} from './actions';

import reducer from './reducer';

describe('reducer', () => {
  describe('addRestaurant', () => {
    context('with name, category, address', () => {
      it('appends a new restaurant into restaurants', () => {
        const state = reducer({
          restaurant: {
            name: '마녀 주방',
            category: '한식',
            address: '서울시 강남구',
          },
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

  describe('updateName', () => {
    it('change the name of restaurant', () => {
      const name = '시카고 피자';

      const state = reducer({
        restaurant: { name: '' },
      }, updateName(name));

      expect(state.restaurant.name).toBe(name);
    });
  });

  describe('updateCategory', () => {
    it('change the category of restaurant', () => {
      const category = '양식';

      const state = reducer({
        restaurant: {
          category: '',
        },
      }, updateCategory(category));

      expect(state.restaurant.category).toBe(category);
    });
  });

  describe('updateAddress', () => {
    it('change the address of restaurant', () => {
      const address = '이태원';

      const state = reducer({
        restaurant: { address: '' },
      }, updateAddress(address));

      expect(state.restaurant.address).toBe(address);
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
