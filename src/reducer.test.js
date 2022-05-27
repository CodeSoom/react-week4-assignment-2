import reducer from './reducer';
import { addRestaurant, updateRestaurantInfo } from './actions';

describe('reducer', () => {
  describe('parameters that are not defined', () => {
    it('should return the initial state', () => {
      expect(reducer()).toEqual({
        restaurantInfo: {
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
        restaurantInfo: {
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

  describe('updateRestaurantInfo', () => {
    it('changes restaurant value', () => {
      const state = reducer({
        restaurants: [],
        restaurantInfo: {
          name: '',
          address: '',
          category: '',
        },
      }, updateRestaurantInfo('name', '강식당'));

      expect(state.restaurantInfo).toEqual({
        name: '강식당',
        address: '',
        category: '',
      });
    });
  });

  describe('addRestaurant', () => {
    function reduceAddRestaurant(restaurant) {
      return reducer({
        restaurantInfo: restaurant,
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
        // expect(state.restaurants[0].id).not.toBeUndefined();
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
        expect(state.restaurantInfo.name).toBe('');
        expect(state.restaurantInfo.address).toBe('');
        expect(state.restaurantInfo.category).toBe('');
      });
    });
  });
});
