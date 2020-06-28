import reducer from './reducer';

import {
  updateRestaurant,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  describe('updateRestaurant', () => {
    context('with new restaurant', () => {
      const previousState = {
        restaurant: {
          name: '',
          category: '',
          address: '',
        },
      };

      it('restaurant이 값이 업데이트된다.', () => {
        const newState = reducer(previousState, updateRestaurant('name', '한식당'));

        expect(newState.restaurant.name).toEqual('한식당');
      });
    });
  });

  describe('addRestaurant', () => {
    context('with new restaurant', () => {
      const previousState = {
        newId: 1,
        restaurant: {
          name: '한식당',
          category: '한식',
          address: '강남구',
        },
        restaurants: [],
      };

      it('restaurants에 새로운 restaurant이 추가된다.', () => {
        const newState = reducer(previousState, addRestaurant());

        expect(newState.restaurants).toHaveLength(1);
      });

      it('추가된 restaurant에 id가 부여된다.', () => {
        const newState = reducer(previousState, addRestaurant());

        expect(newState.restaurants[0].id).toBe(1);
        expect(newState.newId).toBe(1 + 1);
      });

      it('restaurant가 초기화 된다.', () => {
        const newState = reducer(previousState, addRestaurant());

        const { name, category, address } = newState.restaurant;

        expect(name).toBe('');
        expect(category).toBe('');
        expect(address).toBe('');
      });
    });

    context('without new restaurant', () => {
      const previousState = {
        newId: 1,
        restaurant: {
          name: '한식당',
          category: '한식',
          address: '',
        },
        restaurants: [],
      };

      it('restaurant값이 하나라도 없으면 이전상태를 반환합니다.', () => {
        const newState = reducer(previousState, addRestaurant());

        expect(newState).toEqual(previousState);
      });
    });
  });

  context('without existed action', () => {
    it('state를 반환한다.', () => {
      const state = reducer({
        restaurant: {
          name: '마녀식당',
          category: '한식',
          address: '강남구',
        },
      }, {
        type: 'notExistedAction',
      });

      expect(state).toEqual({
        restaurant: {
          name: '마녀식당',
          category: '한식',
          address: '강남구',
        },
      });
    });
  });

  context('without state', () => {
    it('initialState를 사용한다.', () => {
      const state = reducer(undefined, updateRestaurant('name', '한식당'));

      expect(state.restaurant.name).toBe('한식당');
    });
  });
});
