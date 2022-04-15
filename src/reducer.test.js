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
    context(' with name, category, address', () => {
      it('appends a new name,category,address in restaurants', () => {
        const state = reduceAddRestaurant({
          restaurantsName: '쿠스쿠스',
          category: '모로코식',
          address: '이태원동',
        });

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).not.toBeUndefined();
        expect(state.restaurants[0].name).toBe('쿠스쿠스');
        expect(state.restaurants[0].category).toBe('모로코식');
        expect(state.restaurants[0].address).toBe('이태원동');
      });

      it('clear name,category,address in restaurants', () => {
        const state = reduceAddRestaurant({
          restaurantsName: '쿠스쿠스',
          category: '모로코식',
          address: '이태원동',
        });

        expect(state.restaurants.name).toBe('');
        expect(state.restaurants.category).toBe('');
        expect(state.restaurants.address).toBe('');
      });
    });
  });
});
