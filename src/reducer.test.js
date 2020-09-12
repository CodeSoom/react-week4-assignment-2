import reducer from './reducer';

import { setRestaurantList } from './actions';

import restaurantList from '../fixtures/restaurantList';

describe('reducer', () => {
  describe('setRestauranList', () => {
    it('changes restaurnat list', () => {
      const initialState = {
        setRestauranList: [],
      };

      const state = reducer(initialState, setRestaurantList(restaurantList));

      expect(state.restaurantList).not.toHaveLength(0);
    });
  });
});
