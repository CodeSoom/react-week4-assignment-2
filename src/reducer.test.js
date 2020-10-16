import reducer from './reducer';

import { addRestaurant, updateRestaurant } from './actions';

describe('reducer', () => {
  describe('updateRestaurant', () => {
    it('changes restaurant', () => {
      const state = reducer({
        restaurant: {
          name: '',
          classification: '',
          location: '',
        },
      }, updateRestaurant('이름', '시카고피자'));

      expect(state.restaurant.name).toBe('시카고피자');
    });
  });

  describe('addRestaurant', () => {
    function reduceAddRestaurant(restaurant) {
      return reducer({
        restaurants: [],
        restaurant,
      }, addRestaurant());
    }
    context('with restaurant', () => {
      const restaurant = {
        name: '마녀주방',
        classification: '한식',
        location: '서울시 강남구',
      };
      it('appends a new restaurant into restaurants', () => {
        const state = reduceAddRestaurant(restaurant);

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].classification).toBe('한식');
      });

      it('clears task restaurant', () => {
        const state = reduceAddRestaurant(restaurant);

        expect(state.restaurant.name).toBe('');
      });
    });

    context('with empty restaurant', () => {
      const restaurant = {
        name: '',
        classification: '',
        location: '',
      };

      it("doesn't work", () => {
        const state = reduceAddRestaurant(restaurant);

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('with not existed action type', () => {
      const action = () => ({
        type: 'notExistedActionType',
      });
      it('return state', () => {
        const state = reducer(undefined, action());

        expect(state.restaurants).toHaveLength(0);
        expect(state.restaurant.name).toBe('');
      });
    });
  });
});
