import reducer from './reducer';
import { addRestaurant, updateRestaurant } from './actions';

describe('reducer', () => {
  describe('parameters that are not defined', () => {
    it('returns the initial state', () => {
      expect(reducer()).toEqual({
        newId: 100,
        restaurant: {
          name: '',
          address: '',
          category: '',
        },
        restaurants: [],
      });
    });
  });

  describe("Action type that doesn't exist", () => {
    it('returns the initial state', () => {
      const initialState = {
        newId: 100,
        restaurant: {
          name: '',
          address: '',
          category: '',
        },
        restaurants: [],
      };
      const state = reducer(initialState, { type: 'unknown' });
      expect(state).toEqual(initialState);
    });
  });

  describe('updateRestaurant', () => {
    it('changes restaurant value', () => {
      const state = reducer({
        newId: 100,
        restaurants: [],
        restaurant: {
          name: '',
          address: '',
          category: '',
        },
      }, updateRestaurant('name', '강식당'));

      expect(state.restaurant).toEqual({
        name: '강식당',
        address: '',
        category: '',
      });
    });
  });

  describe('addRestaurant', () => {
    function reduceAddRestaurant(restaurant) {
      return reducer({
        newId: 100,
        restaurant,
        restaurants: [],
      }, addRestaurant());
    }
    context('with restaurant', () => {
      it('appends a new restaurant into restaurants', () => {
        const state = reduceAddRestaurant({
          name: '마녀주방',
          address: '한식',
          category: '서울시 강남구',
        });

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).not.toBeUndefined();
        expect(state.restaurants[0].name).toBe('마녀주방');
        expect(state.restaurants[0].address).toBe('한식');
        expect(state.restaurants[0].category).toBe('서울시 강남구');
      });

      it('clears task title', () => {
        const state = reduceAddRestaurant({
          name: '마녀주방',
          address: '한식',
          category: '서울시 강남구',
        });

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurant.name).toBe('');
        expect(state.restaurant.address).toBe('');
        expect(state.restaurant.category).toBe('');
      });
    });
  });
});
