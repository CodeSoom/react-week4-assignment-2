import reducer from './reducer';

import { updateRestaurant } from './actions';

describe('reducer', () => {
  describe('updateRestaurant', () => {
    it('레스토랑에 대한 정보를 입력한다.', () => {
      const restaurantInfo = [
        { name: 'name', value: '마녀주방' },
        { name: 'type', value: '한식' },
        { name: 'address', value: '서울시 강남구' },
      ];

      restaurantInfo.forEach(({ value, name }) => {
        const { restaurant } = reducer({
          restaurant: {
            name: '',
            type: '',
            address: '',
          },
        }, updateRestaurant({ value, name }));

        expect(restaurant[name]).toBe(value);
      });
    });
  });
});
