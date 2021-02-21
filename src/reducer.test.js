import reducer from './reducer';

import {
  changeRestaurantField,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  const restaurant = {
    name: '',
    category: '',
    address: '',
  };

  describe('changeRestaurantField', () => {
    it('changes restaurant feild', () => {
      const state = reducer({
        restaurant: {
          name: '',
          category: '',
          address: '',
        },
      }, changeRestaurantField(({ name: 'name', value: '자매수산' })));

      expect(state.restaurant.name).toBe('자매수산');
    });
  });

  describe('addRestaurant', () => {
    it('appends restaurant into the restaurant list', () => {
      const state = reducer({
        newId: 100,
        restaurants: [],
        restaurant: {
          name: '자매수산',
          category: '일식',
          address: '강남구 논현동',
        },
      }, addRestaurant(restaurant));

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurants[0].name).not.toBeNull();
      expect(state.restaurants[0].category).not.toBeNull();
      expect(state.restaurants[0].address).not.toBeNull();
    });
  });
});
