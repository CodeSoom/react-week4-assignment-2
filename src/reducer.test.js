import reducer from './reducer';

import {
  addRestaurant,
  updateRestaurantName,
  updateRestaurantCategory,
} from './actions';

describe('reducer', () => {
  describe('state undefined', () => {
    it('returns initial state', () => {
      const { restaurants } = reducer(undefined, {});
      expect(restaurants).toHaveLength(0);
    });
  });

  describe('addRestaurant', () => {
    it('add new restaurant into restaurants', () => {
      const state = reducer({
        name: '마녀주방',
        category: '한식',
        location: '서울시 강남구',
        restaurants: [],
      }, addRestaurant());
      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('updateRestaurantName', () => {
    it('changes new restaurant name', () => {
      const state = reducer(
        {
          name: '마녀주방',
        },
        updateRestaurantName('김가네'),
      );

      expect(state.name).toBe('김가네');
    });
  });

  describe('updateRestaurantCategory', () => {
    it('changes new restaurant category', () => {
      const state = reducer(
        {
          category: '일식',
        },
        updateRestaurantCategory('한식'),
      );

      expect(state.category).toBe('한식');
    });
  });

  describe('updateRestaurantLocation', () => {
    it('changes new restaurant location', () => {
      const state = reducer(
        {
          location: '서울시 강남구',
        },
        updateRestaurantLocation('서울시 성북구'),
      );

      expect(state.location).toBe('서울시 성북구');
    });
  });
});
