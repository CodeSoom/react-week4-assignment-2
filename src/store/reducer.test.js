import reducer from './reducer';

import {
  updateRestaurantInfo,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  describe('updateRestaurantInfo', () => {
    context('with initial state', () => {
      it('changes new restaurant name', () => {
        const state = reducer(undefined, updateRestaurantInfo('name', '마녀주방'));

        expect(state.name).toBe('마녀주방');
      });

      it('changes new restaurant cate', () => {
        const state = reducer(undefined, updateRestaurantInfo('category', '분식'));

        expect(state.category).toBe('분식');
      });

      it('changes new restaurant name', () => {
        const state = reducer(undefined, updateRestaurantInfo('address', '서울시 강남구'));

        expect(state.address).toBe('서울시 강남구');
      });
    });
  });

  describe('addRestaurant', () => {
    context('with all info filled', () => {
      it('resets name, category, address', () => {
        const state = reducer({
          name: '마녀주방', category: '분식', address: '서울시 강남구', restaurants: [], error: '',
        }, addRestaurant());

        expect(state.name).toBe('');
        expect(state.category).toBe('');
        expect(state.address).toBe('');
      });

      it('appends as new restaurant into restaurants', () => {
        const state = reducer({
          name: '마녀주방', category: '분식', address: '서울시 강남구', restaurants: [], error: '',
        }, addRestaurant());

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].name).toBe('마녀주방');
        expect(state.restaurants[0].category).toBe('분식');
        expect(state.restaurants[0].address).toBe('서울시 강남구');
        expect(state.error).toBe('');
      });
    });
  });
});
