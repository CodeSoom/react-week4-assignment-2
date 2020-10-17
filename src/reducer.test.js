import reducer from './reducer';

import { updateRestaurant, addRestaurant } from './actions';

describe('reducer', () => {
  describe('updateRestaurant', () => {
    it('레스토랑에 대한 정보를 입력한다.', () => {
      const restaurantInfo = [
        { name: 'name', value: '마녀주방' },
        { name: 'category', value: '한식' },
        { name: 'address', value: '서울시 강남구' },
      ];

      restaurantInfo.forEach(({ value, name }) => {
        const { restaurant } = reducer({
          restaurant: {
            name: '',
            category: '',
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

    const initRestaurant = { name: '', category: '', address: '' };
    context('with restaurant', () => {
      const restaurantInfo = { name: '마녀주방', category: '한식', address: '서울시 강남구' };

      it('레스토랑에 대한 정보를 등록한다.', () => {
        const { restaurant, restaurants } = addRestaurantReducer(restaurantInfo);

        expect(restaurants[0].id).not.toBeUndefined();
        expect(restaurants).toHaveLength(1);
        expect(restaurants[restaurants.length - 1].id).toBe(1);
        expect(restaurant).toEqual(initRestaurant);
      });
    });

    context('without restaurant', () => {
      it('할 일이 추가되지 않는다.', () => {
        const { restaurants } = addRestaurantReducer(initRestaurant);

        expect(restaurants).toHaveLength(0);
      });
    });
  });
});
