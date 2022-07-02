import UpdateRestaurantName from './actions';

import { restaurantName } from './fixtures/restaurant';

import reducer from './reducer';

describe('reducer', () => {
  context('state가 없는경우', () => {
    it('아무값도 바뀌지않는다.', () => {
      const state = reducer(undefined, { });

      expect(state).toEqual({
        nameInput: '',
        typeInput: '',
        adressInput: '',
        restaurants: [],
      });
    });
  });

  context('state가 있는경우', () => {
    describe('UpdateRestaurantName', () => {
      it('nameInput이 변경이된다', () => {
        const state = reducer({ nameInput: '' }, UpdateRestaurantName(restaurantName));

        expect(state.nameInput).toBe(restaurantName);
      });
    });
  });
});
