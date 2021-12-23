import reducer, { initialState } from './reducer';
import { updateRestaurantInfo, addRestaurant } from './actions';

import { restautrant } from '../fixture/restautrants';

describe('reducer', () => {
  describe('updateRestaurantInfo', () => {
    it('changes restautrant name', () => {
      const state = reducer(
        {
          id: 100,
          restautrants: [],
          restautrant: { name: '', type: '', address: '' },
        },
        updateRestaurantInfo('name', '마녀 식당'),
      );

      expect(state.restautrant.name).toBe('마녀 식당');
    });

    it('changes restautrant type', () => {
      const state = reducer(
        {
          id: 100,
          restautrants: [],
          restautrant: { name: '', type: '', address: '' },
        },
        updateRestaurantInfo('type', '한식'),
      );

      expect(state.restautrant.type).toBe('한식');
    });

    it('changes restautrant address', () => {
      const state = reducer(
        {
          id: 100,
          restautrants: [],
          restautrant: { name: '', type: '', address: '' },
        },
        updateRestaurantInfo('address', '서울시 강남구'),
      );

      expect(state.restautrant.address).toBe('서울시 강남구');
    });
  });

  describe('addRestaurant', () => {
    context('with restaurantInfo', () => {
      it('appends new restaurant into restaurants', () => {
        const state = reducer(
          {
            id: 100,
            restautrants: [],
            restautrant,
          },
          addRestaurant(),
        );

        expect(state.restautrants).toHaveLength(1);
      });

      it('clears restaurant', () => {
        const state = reducer(
          {
            id: 100,
            restautrants: [],
            restautrant,
          },
          addRestaurant(),
        );

        expect(state.restautrant).toEqual(initialState.restautrant);
      });
    });

    context('without one of restaurantInfo', () => {
      it('deosn\'t change restautrants state', () => {
        const state = reducer(
          {
            id: 100,
            restautrants: [],
            restautrant: { name: '', type: '', address: '' },
          },
          addRestaurant(),
        );

        expect(state.restautrants).toEqual(initialState.restautrants);
      });
    });
  });
});
