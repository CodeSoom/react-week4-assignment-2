import reducer from './reducer';

import updateRestaurant from './actions';

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

  context('with not existed action type', () => {
    const action = () => ({
      type: 'notExistedActionType',
    });
    it('return state', () => {
      const state = reducer(undefined, action());

      expect(state.restaurants).toHaveLength(0);
      expect(state.restaurant.name).toBe('');
      expect(state.placeholders).toHaveLength(3);
    });
  });
});
