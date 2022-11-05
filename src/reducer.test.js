import reducer from './reducer';

import {
  setRestaurants,
  changeRestaurantField,
  addRestaurant,
} from './actions';

import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('음식점의 리스트가 변화한다', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('changeRestaurantField', () => {
    it('입력한 음식점으로 바뀐다', () => {
      const initialState = {
        restaurant: {
          name: '이름',
          category: '분류',
          address: '주소',
        },
      };

      const state = reducer(initialState, changeRestaurantField({
        name: 'address',
        value: '서울시 강남구 역삼동',
      }));

      expect(state.restaurant.address).toBe('서울시 강남구 역삼동');
    });
  });
});
