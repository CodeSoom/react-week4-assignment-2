import reducer from './reducer';

import {
  changeRestaurantData,
  addRestaurantData,
} from './actions';

describe('reducer', () => {
  describe('changeRestaurantData', () => {
    it('changes input data', () => {
      const state = reducer({ name: '중국집' }, changeRestaurantData('name', '중국집'));

      expect(state.name).toBe('중국집');
    });
  });

  describe('add restaurants data', () => {
    function reduceAddRestaurant(state) {
      return reducer(state, addRestaurantData());
    }

    const initialState = {
      name: '중국집',
      category: '중식',
      address: '홍대',
      restaurants: [],
    };

    context('with all input data', () => {
      it('appends a new restaurants data', () => {
        const state = reduceAddRestaurant(initialState);

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).not.toBeUndefined();
        expect(state.restaurants[0].text).toBe('중국집 | 중식 | 홍대');
      });

      it('clears task title', () => {
        const state = reduceAddRestaurant(initialState);

        expect(state.name).toBe('');
        expect(state.category).toBe('');
        expect(state.address).toBe('');
      });
    });

    context('When there is no input value', () => {
      it('Don`t do it without name', () => {
        const state = reduceAddRestaurant({ ...initialState, name: '' });

        expect(state?.restaurants).toHaveLength(0);
      });

      it('Don`t do it without category', () => {
        const state = reduceAddRestaurant({ ...initialState, category: '' });

        expect(state?.restaurants).toHaveLength(0);
      });

      it('Don`t do it without address', () => {
        const state = reduceAddRestaurant({ ...initialState, address: '' });

        expect(state?.restaurants).toHaveLength(0);
      });
    });
  });
});
