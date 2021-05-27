import reducer from './reducer';

import { updateName } from './actions';

describe('reduecer', () => {
  describe('updateName', () => {
    it('새로운 restaurant(상태)가 만들어지고 새로운 name으로 변경된다', () => {
      // given
      const previouRestaurant = {
        name: '',
        restaurants: [],
      };
      // when
      const restaurant = reducer(previouRestaurant, updateName('마녀주방'));
      // then
      expect(restaurant.name).toBe('마녀주방');
    });
  });
});
