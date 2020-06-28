import reducer from './reducer';

import {
  updateRestaurant,
  updateClassify,
  updateAddress,
  addRestaurant,
} from './action';

describe('reducer', () => {
  describe('updateRestaurant', () => {
    it('식당 입력', () => {
      const state = reducer({
        restaurant: '',
      }, updateRestaurant('바른 치킨'));

      expect(state.restaurant).toBe('바른 치킨');
    });
  });

  describe('updateClassify', () => {
    it('분류 입력', () => {
      const state = reducer({
        classify: '',
      }, updateClassify('치킨'));

      expect(state.classify).toBe('치킨');
    });
  });

  describe('updateAddress', () => {
    it('주소 입력', () => {
      const state = reducer({
        address: '',
      }, updateAddress('시립대로'));

      expect(state.address).toBe('시립대로');
    });
  });

  describe('addRestaurant', () => {
    function reduceAddTask(restaurant, classify, address) {
      return reducer({
        newId: 100,
        restaurant,
        classify,
        address,
        restaurants: [],
      }, addRestaurant());
    }

    context('입력값 있을 때', () => {
      it('식당 추가', () => {
        const state = reduceAddTask('바른 치킨', '치킨', '시립대로');

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).not.toBeUndefined();
        expect(state.restaurants[0].restaurant).toBe('바른 치킨');
        expect(state.restaurants[0].classify).toBe('치킨');
        expect(state.restaurants[0].address).toBe('시립대로');
      });

      it('식당 추가 후 인풋 초기화', () => {
        const state = reduceAddTask('바른 치킨', '치킨', '시립대로');

        expect(state.restaurant).toBe('');
        expect(state.classify).toBe('');
        expect(state.address).toBe('');
      });
    });

    context('입력값 하나라도 비었을 때', () => {
      it('작동안함', () => {
        const state = reduceAddTask('바른 치킨', '치킨', '');

        expect(state.restaurants).toHaveLength(0);
      });

      it('작동안함', () => {
        const state = reduceAddTask('바른 치킨', '', '');

        expect(state.restaurants).toHaveLength(0);
      });

      it('작동안함', () => {
        const state = reduceAddTask('바른 치킨', '', '시립대로');

        expect(state.restaurants).toHaveLength(0);
      });

      it('작동안함', () => {
        const state = reduceAddTask('', '', '시립대로');

        expect(state.restaurants).toHaveLength(0);
      });

      it('작동안함', () => {
        const state = reduceAddTask('', '치킨', '시립대로');

        expect(state.restaurants).toHaveLength(0);
      });

      it('작동안함', () => {
        const state = reduceAddTask('', '치킨', '');

        expect(state.restaurants).toHaveLength(0);
      });

      it('작동안함', () => {
        const state = reduceAddTask('', '', '');

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });
});
