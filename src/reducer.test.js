import reducer from './reducer';
import { addRestaurant } from './actions';

describe('reducer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('addRestaurant', () => {
    function reduceAddRestaurant({ restaurantsName, category, address }) {
      return reducer({
        newId: 100,
        restaurantsName,
        category,
        address,
        restaurants: [],
      }, addRestaurant({ restaurantsName, category, address }));
    }
    it('appends a new name,category,address in restaurants', () => {
      const state = reduceAddRestaurant({
        restaurantsName: '쿠스쿠스',
        category: '모로코식',
        address: '이태원동',
      });

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurants[0].id).not.toBeUndefined();
      expect(state.restaurants[0].name).toBe('쿠스쿠스');
    });
  });
});
