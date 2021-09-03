import reducer from './reducer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  describe('none exited state', () => {
    it('returns initialState', () => {
      const initialState = {
        restaurantName: '',
        restaurantCategory: '',
        restaurantAddress: '',
        restaurants: [],
      };
      const nextState = reducer(undefined, { type: undefined });

      expect(nextState).toEqual(initialState);
    });
  });

  describe('none exited action', () => {
    it('returns previous state', () => {
      const previousState = { restaurantName: '' };
      const nextState = reducer(previousState, { type: undefined });

      expect(nextState).toBe(previousState);
    });
  });

  describe('updateRestaurantName', () => {
    it('changes restaurant name', () => {
      const previousState = { restaurantName: '' };
      const nextState = reducer(previousState, updateRestaurantName('시카고피자'));

      expect(nextState.restaurantName).toBe('시카고피자');
    });
  });

  describe('updateRestaurantCategory', () => {
    it('changes restaurant category', () => {
      const previousState = { restaurantCategory: '' };
      const nextState = reducer(previousState, updateRestaurantCategory('양식'));

      expect(nextState.restaurantCategory).toBe('양식');
    });
  });

  describe('updateRestaurantAddress', () => {
    it('changes restaurant address', () => {
      const previousState = { restaurantAddress: '' };
      const nextState = reducer(previousState, updateRestaurantAddress('서울시 강남구'));

      expect(nextState.restaurantAddress).toBe('서울시 강남구');
    });
  });

  describe('addRestaurant', () => {
    it('adds a new restaurant', () => {
      const previousState = {
        restaurantName: '맥도날드',
        restaurantCategory: '양식',
        restaurantAddress: '서울시 종로구',
        restaurants: [],
      };

      const nextState = reducer(previousState, addRestaurant());

      expect(nextState).toEqual({
        restaurantName: '',
        restaurantCategory: '',
        restaurantAddress: '',
        restaurants: [{
          id: 0,
          title: '맥도날드 | 양식 | 서울시 종로구',
        }],
      });
    });
  });
});
