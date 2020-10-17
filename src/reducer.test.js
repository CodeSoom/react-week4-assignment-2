import reducer from './reducer';

import { updateRestaurant, addRestaurant } from './actions';

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

  describe('addRestaurant', () => {
    const addRestaurantReducer = (restaurant) => reducer({
      id: 1,
      restaurant,
      restaurants: [],
    }, addRestaurant());

    context('with restaurant', () => {
      const restaurantInfo = [
        { name: '마녀주방', type: '한식', address: '서울시 강남구' },
        { name: '시카고피자', type: '양식', address: '이태원동' },
        { name: '키와미', type: '일식', address: '분당구 정자동' },
      ];

      it('레스토랑에 대한 정보를 등록한다.', () => {
        restaurantInfo.forEach((item, index) => {
          const { restaurant, restaurants } = addRestaurantReducer(item);

          expect(restaurants[0].id).not.toBeUndefined();
          expect(restaurants).toHaveLength(index + 1);
          expect(restaurants[restaurants.length - 1].id).toBe(index);
          expect(restaurant).toBe({ name: '', type: '', address: '' });
        });
      });
    });

    context('without restaurant', () => {
      const restaurantInfo = { name: '', type: '', address: '' };
      it('할 일이 추가되지 않는다.', () => {
        const { restaurants } = addRestaurantReducer(restaurantInfo);

        expect(restaurants).toHaveLength(0);
      });
    });
  });
});
