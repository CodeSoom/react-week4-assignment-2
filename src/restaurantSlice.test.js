import reducer, {
  changeRestaurant,
} from './restaurantSlice';

describe('restaurantSlice', () => {
  describe('changeRestaurant', () => {
    it('changes restaurant feild', () => {
      const state = reducer({
        restaurant: {
          name: '',
          category: '',
          address: '',
        },
      }, changeRestaurant(({ name: 'name', value: '자매수산' })));

      expect(state.restaurant.name).toBe('자매수산');
    });
  });
});
