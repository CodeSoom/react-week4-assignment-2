import reducer from './reducer';

import {
  addRestaurant,
  updateRestaurantField,
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

  describe('updateRestaurantField', () => {
    it('changes restaurant field', () => {
      const previousState = { restaurant: { name: '' } };
      const nextState = reducer(
        previousState,
        updateRestaurantField({
          name: 'name',
          value: '시카고피자',
        }),
      );

      expect(nextState.restaurant.name).toBe('시카고피자');
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
