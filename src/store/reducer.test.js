import reducer from './reducer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  context('without exited state', () => {
    it('returns initialState', () => {
      const initialState = {
        restaurant: {
          name: '',
          category: '',
          address: '',
        },
        restaurants: [],
      };
      const nextState = reducer(undefined, { type: undefined });

      expect(nextState).toEqual(initialState);
    });
  });

  context('without exited action', () => {
    it('returns previous state', () => {
      const previousState = { restaurant: { name: '' } };
      const nextState = reducer(previousState, { type: undefined });

      expect(nextState).toBe(previousState);
    });
  });

  describe('updateRestaurantName', () => {
    it('changes restaurant name', () => {
      const previousState = { restaurant: { name: '' } };
      const nextState = reducer(previousState, updateRestaurantName('시카고피자'));

      expect(nextState.restaurant.name).toBe('시카고피자');
    });
  });

  describe('updateRestaurantCategory', () => {
    it('changes restaurant category', () => {
      const previousState = { restaurant: { category: '' } };
      const nextState = reducer(previousState, updateRestaurantCategory('양식'));

      expect(nextState.restaurant.category).toBe('양식');
    });
  });

  describe('updateRestaurantAddress', () => {
    it('changes restaurant address', () => {
      const previousState = { restaurant: { address: '' } };
      const nextState = reducer(previousState, updateRestaurantAddress('서울시 강남구'));

      expect(nextState.restaurant.address).toBe('서울시 강남구');
    });
  });

  describe('addRestaurant', () => {
    it('adds a new restaurant', () => {
      const previousState = {
        restaurant: {
          name: '맥도날드',
          category: '양식',
          address: '서울시 종로구',
        },
        restaurants: [],
      };

      const nextState = reducer(previousState, addRestaurant());

      expect(nextState).toEqual({
        restaurant: {
          name: '',
          category: '',
          address: '',
        },
        restaurants: [{
          id: 0,
          title: '맥도날드 | 양식 | 서울시 종로구',
        }],
      });
    });
  });
});
