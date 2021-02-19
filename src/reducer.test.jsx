import reducer from './reducer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
} from './actions';

describe('reducer', () => {
  const previousState = {
    id: 0,
    name: '',
    category: '',
    address: '',
    restaurants: [],
  };

  context('without registered action type', () => {
    it('does nothing', () => {
      const state = reducer(previousState, {
        type: undefined,
      });

      expect(state).toEqual(previousState);
    });
  });

  context('with registered action type', () => {
    describe('updateRestaurantInformation', () => {
      context('without previous state', () => {
        it('updates restaurant name using initial state', () => {
          const state = reducer(undefined, updateRestaurantName('마녀주방'));

          expect(state.name).toBe('마녀주방');
        });
      });

      context('with previous state', () => {
        it('updates restaurant name', () => {
          const state = reducer(previousState, updateRestaurantName('마녀주방'));

          expect(state.name).toBe('마녀주방');
        });

        it('updates restaurant category', () => {
          const state = reducer(previousState, updateRestaurantCategory('한식'));

          expect(state.category).toBe('한식');
        });

        it('updates restaurant address', () => {
          const state = reducer(previousState, updateRestaurantAddress('서울시 강남구'));

          expect(state.address).toBe('서울시 강남구');
        });

        it('adds restaurant information', () => {
          const state = reducer(previousState, addRestaurantInformation());

          expect(state.restaurants).toHaveLength(1);
        });
      });
    });
  });
});
