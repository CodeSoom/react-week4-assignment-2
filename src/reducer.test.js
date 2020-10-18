import reducer from './reducer';

import {
  updateInformation,
  addInformation,
  initializeRestaurantForm,
} from './actions';

describe('reducer', () => {
  describe('updateInformation', () => {
    it('changes typed restaurant information', () => {
      const state = reducer({
        restaurant: {
          name: '',
          category: '',
          address: '',
        },
      }, updateInformation({
        name: 'name',
        value: 'New info',
      }));

      expect(state.restaurant.name).toBe('New info');
    });
  });

  describe('addInformation', () => {
    it('appends new restaurant into restaurants', () => {
      const state = reducer({
        restaurants: [],
        newId: 100,
      }, addInformation({
        name: '밥',
        category: '한식',
        address: '서울',
      }));

      expect(state.restaurants).toHaveLength(1);

      expect(state.restaurants[0].name).toBe('밥');
      expect(state.restaurants[0].category).toBe('한식');
      expect(state.restaurants[0].address).toBe('서울');
    });
  });

  describe('initializeRestaurantForm', () => {
    it('clears all information', () => {
      const state = reducer({
        restaurant: {
          name: '밥',
          category: '한식',
          address: '서울',
        },
        newId: 100,
      }, initializeRestaurantForm());

      expect(state.restaurant.name).toBe('');
      expect(state.restaurant.category).toBe('');
      expect(state.restaurant.address).toBe('');
    });
  });

  describe('Unhandled action type', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'Unhandled action type' });

      expect(state).toBe(state);
    });
  });
});
