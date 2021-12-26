import reducer from './index';

import {
  updateRestaurant,
  addRestaurant,
} from '../actions';

describe('reducer', () => {
  const initialState = {
    restaurants: [],
    restaurant: {
      name: '',
      category: '',
      address: '',
    },
  };

  context('updateRestaurant', () => {
    it('식당 이름을 입력하면, name에 값이 적용된다.', () => {
      const name = '마녀주방';
      const state = reducer(initialState, updateRestaurant('name', name));

      expect(state.restaurant.name).toBe(name);
    });

    it('식당 분류를 입력하면, category에 값이 적용된다.', () => {
      const category = '한식';
      const state = reducer(initialState, updateRestaurant('category', category));

      expect(state.restaurant.category).toBe(category);
    });

    it('식당 주소를 입력하면, address에 값이 적용된다.', () => {
      const address = '서울시 강남구';
      const state = reducer(initialState, updateRestaurant('address', address));

      expect(state.restaurant.address).toBe(address);
    });
  });

  context('addRestaurant', () => {
    const restaurant = {
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    };

    it('식당 정보가 있으면, restaurants에 해당 정보가 추가된다.', () => {
      const { restaurants } = reducer({
        restaurants: [],
        restaurant,
      }, addRestaurant());

      expect(restaurants[0].name).toBe(restaurant.name);
      expect(restaurants[0].category).toBe(restaurant.category);
      expect(restaurants[0].address).toBe(restaurant.address);
    });

    it('식당 정보가 있으면, restaurants 배열 길이가 1만큼 증가한다.', () => {
      const { restaurants } = reducer({
        restaurants: [],
        restaurant,
      }, addRestaurant());

      expect(restaurants).toHaveLength(1);
    });
  });

  context('예외상황이 발생할 때', () => {
    it('존재하지않는 액션이 디스패치되면, 초기 상태 객체를 리턴한다.', () => {
      const state = reducer(initialState, { type: 'undefinedAction' });

      expect(state).toEqual(initialState);
    });

    it('리듀서에 상태 객체가 전달되지 않으면, 초기 상태 객체를 리턴한다.', () => {
      const state = reducer(undefined, {});

      expect(state).toEqual(initialState);
    });
  });
});
