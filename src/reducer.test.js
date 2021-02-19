import reducer from './reducer';

import {
  updateRestaurant,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  const restaurant = {
    name: '베이징',
    category: '중식',
    address: '파주시',
  };

  context('with action type', () => {
    describe('updateRestaurant', () => {
      it('changes the name of the restaurant', () => {
        const state = reducer({
          restaurant,
        }, updateRestaurant({ name: '봉참치' }));

        expect(state.restaurant.name).toBe('봉참치');
      });

      it('changes the category of the restaurant', () => {
        const state = reducer({
          restaurant,
        }, updateRestaurant({ category: '일식' }));

        expect(state.restaurant.category).toBe('일식');
      });

      it('changes the address of the restaurant', () => {
        const state = reducer({
          restaurant,
        }, updateRestaurant({ address: '서울' }));

        expect(state.restaurant.address).toBe('서울');
      });
    });
  });
});
