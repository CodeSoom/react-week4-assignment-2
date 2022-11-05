import reducer from "./reducer";

import {changeText, addRestaurant } from './actions';

describe('reducer', () => {
  describe('changeText', () => {
    it('레스토랑 정보를 입력한다.', () => {
      const state = reducer({
        name: '',
      }, changeText('name', '김밥천국'));

      expect(state.name).toBe('김밥천국');
    });
  });

  describe('addRestaurant', () => {
    function reducerAddRestaurant(storeName, storeCategory, storeAddress) {
      return reducer({
        id: 1,
        name: storeName,
        category: storeCategory,
        address: storeAddress,
        restaurantList: [],
      }, addRestaurant());
    }

    context('입력란에 레스토랑 정보가 있을 경우', () => {
      it('레스토랑 정보를 추가하여 목록을 만든다.', () => {
        const state = reducerAddRestaurant('양키통닭', '한식', '서울시 문래동');

        expect(state.restaurantList).toHaveLength(1);
      });

      it('레스토랑 정보를 빈 값으로 만든다.', () => {
        const state = reducerAddRestaurant('양키통닭', '한식', '서울시 문래동');

        expect(state.name).toBe('');
        expect(state.category).toBe('');
        expect(state.address).toBe('');
      });
    });

    context('입력란에 레스토랑 정보가 없을 경우', () => {
      it('아무런 동작을 하지 않는다.', () => {
        const state = reducer({
          newId: 100,
          name: '',
          category: '',
          address: '',
          restaurantList: [],
        });

        expect(state.name).toBe('');
        expect(state.category).toBe('');
        expect(state.address).toBe('');
        expect(state.restaurantList).toHaveLength(0);
      });
    });
  });

  describe('아무런 동작을 하지 않는 경우', () => {
    it('아무 일도 일어나지 않는다.', () => {
      const state = reducer();

      expect(state.name).toBe('');
      expect(state.category).toBe('');
      expect(state.address).toBe('');
      expect(state.restaurantList).toHaveLength(0);
    });
  });
});
