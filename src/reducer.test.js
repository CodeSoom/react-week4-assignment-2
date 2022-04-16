import reducer from './reducer';

import {
  changeRestaurantField,
  setRestaurants,
  addRestaurant,
} from './actions';

import restaurants from '../fixtures/restaurants';
import restaurant from '../fixtures/restaurant';

describe('Reducer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('setRestaurants', () => {
    const initialState = {
      restaurants: [],
    };

    it('returns restaurants to array', () => {
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('changeRestaurantField', () => {
    const initialState = {
      restaurant,
    };

    it('return change restaurant field value', () => {
      const state = reducer(initialState, changeRestaurantField({ name: 'address', value: '서울시 종로구' }));

      expect(state.restaurant.address).toBe('서울시 종로구');
    });
  });

  describe('addRestaurant', () => {
    const initialState = {
      restaurant,
      restaurants: [],
    };

    it('appends restaurant into restaurants and clear restaurant form', () => {
      const state = reducer(initialState, addRestaurant());

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurant.name).toBe('');
      expect(state.restaurant.category).toBe('');
      expect(state.restaurant.address).toBe('');
    });
  });
});
