import { reducer, initialState } from './reducer';

import {
  updateName,
  updateClassify,
  updateAddress,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  describe('updateName', () => {
    it('식당 입력', () => {
      const state = reducer({
        name: '',
      }, updateName('바른 치킨'));

      expect(state.name).toBe('바른 치킨');
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
    function reduceAddTask(name, classify, address) {
      return reducer({
        newId: 100,
        name,
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
        expect(state.restaurants[0].name).toBe('바른 치킨');
        expect(state.restaurants[0].classify).toBe('치킨');
        expect(state.restaurants[0].address).toBe('시립대로');
      });

      it('식당 추가 후 인풋 초기화', () => {
        const state = reduceAddTask('바른 치킨', '치킨', '시립대로');

        expect(state.name).toBe('');
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

  context('액션값이 없을 때', () => {
    it('state 값을 그대로 보내준다', () => {
      const state = reducer({
        newId: 100,
        name: '',
        classify: '',
        address: '',
        restaurants: [],
      });

      expect(state).toEqual(initialState);
    });

    it('state 값을 그대로 보내준다', () => {
      const state = reducer({
        newId: 100,
        name: '',
        classify: '',
        address: '',
        restaurants: [],
      }, { type: 'deleteRestaurant' });

      expect(state).toEqual(initialState);
    });
  });

  context('이전 상태가 없으면', () => {
    it('initialState 적용', () => {
      const state = reducer();

      expect(state).toEqual(initialState);
    });
  });
});
