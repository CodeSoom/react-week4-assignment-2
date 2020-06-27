import reducer from './reducer';

import { addRestaurant } from './actions';

describe('reducer', () => {
  describe('add restaurant', () => {
    context('with restaurant', () => {
      it('should return with new restaurant', () => {
        const state = reducer(
          {
            newId: 100, name: 'Seoul Pizza', type: 'Western', address: 'Seoul Itaewon', restaurants: [],
          },
          addRestaurant(),
        );

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).not.toBeUndefined();
        expect(state.restaurants[0].name).toBe('Seoul Pizza');
      });
    });

    context('without restaurant', () => {
      it('should return with new restaurant', () => {
        const state = reducer();

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });
});
