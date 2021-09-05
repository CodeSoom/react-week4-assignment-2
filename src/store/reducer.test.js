import reducer from './reducer';

import {
  updateRestaurantInfo,
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
});
