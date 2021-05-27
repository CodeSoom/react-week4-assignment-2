import reducer from './reducer';

describe('reduecer', () => {
  describe('updateName', () => {
    it('새로운 restaurant(상태)가 만들어지고 새로운 name으로 변경된다', () => {
      // given
      const previouRestaurant = {
        name: '',
        restaurants: [],
      };

      const action = {
        type: 'updateName',
        payload: {
          name: '마녀주방',
        },
      };
      // when
      const restaurant = reducer(previouRestaurant, action);
      // then
      expect(restaurant.name).toBe('마녀주방');
    });
  });
});
