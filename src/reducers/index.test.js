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
      const state = reducer(initialState, updateRestaurant);
    });

    it('식당 분류를 입력하면, category에 값이 적용된다.', () => {
      const state = reducer(initialState, updateRestaurant);
    });

    it('식당 주소를 입력하면, address에 값이 적용된다.', () => {
      const state = reducer(initialState, updateRestaurant);
    });
  });

  context('addRestaurant', () => {
    it('식당 정보를 입력하면, restaurants에 해당 정보가 추가된다.', () => {
      const state = reducer(initialState, addRestaurant);
    });

    it('식당 정보를 입력하면, restaurants 배열 길이가 1만큼 증가한다.', () => {
      const state = reducer(initialState, addRestaurant);
    });
  });
});
