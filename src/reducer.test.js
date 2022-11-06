import reducer from './reducer';

import {
  setRestaurants,
  changeRestaurantField,
  addRestaurant,
} from './actions';

import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  context('레스토랑이 입력된 경우', () => {
    describe('setRestaurants', () => {
      it('레스토랑의 리스트가 변경된다', () => {
        const initialState = {
          restaurants: [],
        };

        const state = reducer(initialState, setRestaurants(restaurants));

        expect(state.restaurants).not.toHaveLength(0);
      });
    });

    describe('changeRestaurantField', () => {
      it('입력한 레스토랑의 정보로 바뀐다', () => {
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

    describe('addRestaurant', () => {
      it('레스토랑 리스트에 입력한 레스토랑을 추가하고 입력값을 초기화한다', () => {
        const initialState = {
          newId: 101,
          restaurants: [],
          restaurant: {
            name: '베리파스타',
            category: '이탈리안',
            address: '서울시 강남구 역삼동',
          },
        };

        const state = reducer(initialState, addRestaurant());

        expect(state.restaurants).toHaveLength(1);

        const restaurant = state.restaurants[state.restaurants.length - 1];
        expect(restaurant.id).toBe(101);
        expect(restaurant.name).toBe('베리파스타');

        expect(state.restaurant.name).toBe('');

        expect(state.newId).toBe(102);
      });
    });
  });

  context('레스토랑이 없을 경우', () => {
    describe('아무런 값이 없을 때', () => {
      it('아무런 동작을 하지 않는다', () => {
        const state = reducer();

        expect(state.restaurant.name).toBe('');
        expect(state.restaurant.category).toBe('');
        expect(state.restaurant.address).toBe('');
        expect(state.restaurants).toHaveLength(0);
      });
    });
  });
});
