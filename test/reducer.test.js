import reducer from '../src/reducer';

import {
  setRestaurants,
  changeRestaurantField,
  addRestaurant,
} from '../src/actions';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const initalState = {
        restaurants: [],
      };

      const state = reducer(initalState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('changeRestaurants', () => {
    it('changes restaurants form', () => {
      const initalState = {
        restaurant: {
          name: '이름',
          category: '분류',
          address: '주소',
        },
      };

      const state = reducer(initalState, changeRestaurantField({
        name: 'address',
        value: '서울시 강남구 역삼동',
      }));

      expect(state.restaurant.address).toBe('서울시 강남구 역삼동');
    });
  });

  describe('addRestaurants', () => {
    it('append restaurant into restaurants and clear restaurant form', () => {
      const initalState = {
        restaurants: [],
        restaurant: {
          name: '마법사주방',
          category: '이탈리안',
          address: '서울시 강남구 역삼동',
        },
      };

      const state = reducer(initalState, addRestaurant());

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurant.name).toBe('');
    });
  });
});
