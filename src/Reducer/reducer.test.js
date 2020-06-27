import reducer from './reducer';

import {
  updateRestaurant,
  addRestaurant,
} from '../Action/actions';

describe('reducer', () => {
  const testRestaurant = {
    name: '버튼업', category: '경양식', address: '마포구',
  };

  describe('updateRestaurant', () => {
    context('when input restaurant infomation', () => {
      it('change restaurant obejct', () => {
        const state = reducer({
          restaurant: {
            name: '', category: '', address: '',
          },
        }, updateRestaurant(testRestaurant));

        expect(state.restaurant).toBe(testRestaurant);
      });
    });
  });

  describe('addRestaurant', () => {
    context('with restaurant infomation', () => {
      it('add a new restaurant into restaurants', () => {
        const state = reducer({
          newId: 20,
          restaurant: testRestaurant,
          restaurants: [],
        }, addRestaurant());

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).not.toBeUndefined();
        expect(state.restaurants[0].restaurant).toBe(testRestaurant);
      });
    });
  });
});
