import reducer, { initialState } from './reducer';

import { addRestaurant, updateInput } from './actions';

describe('reducer', () => {
  describe('addRestaurant', () => {
    context('with input data', () => {
      it('returns state with append restaurants data', () => {
        const state = reducer(initialState, addRestaurant({
          name: '마녀주방',
          category: '양식',
          address: '서울시 강남구',
        }));

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].name).toBe('마녀주방');
        expect(state.restaurants[0].category).toBe('양식');
        expect(state.restaurants[0].address).toBe('서울시 강남구');
      });
    });

    context('without all input data', () => {
      it('doesnt work', () => {
        const state = reducer(initialState, addRestaurant({
          name: '',
          category: '',
          address: '',
        }));

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without name input data', () => {
      it('doesnt work', () => {
        const state = reducer(initialState, addRestaurant({
          name: '',
          category: '카테고리',
          address: '주소',
        }));

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without category', () => {
      it('doesnt work', () => {
        const state = reducer(initialState, addRestaurant({
          name: '이름',
          category: '',
          address: '주소',
        }));

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without address', () => {
      it('doesnt work', () => {
        const state = reducer(initialState, addRestaurant({
          name: '이름',
          category: '카테고리',
          address: '',
        }));

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });

  describe('changeInput', () => {
    context('with change name input data', () => {
      it('returns state with changed input data', () => {
        const state = reducer(initialState, updateInput({
          name: '바보',
        }));

        expect(state.input.name).toBe('바보');
      });
    });

    context('with change category input data', () => {
      it('returns state with changed input data', () => {
        const state = reducer(initialState, updateInput({
          category: '바보',
        }));

        expect(state.input.category).toBe('바보');
      });
    });

    context('with change address input data', () => {
      it('returns state with changed input data', () => {
        const state = reducer(initialState, updateInput({
          address: '바보',
        }));

        expect(state.input.address).toBe('바보');
      });
    });
  });

  describe('not exist action type', () => {
    it('returns original state', () => {
      const state = reducer(initialState, {
        type: 'nope',
      });

      expect(state.input.name).toBe('');
      expect(state.input.category).toBe('');
      expect(state.input.address).toBe('');
    });
  });

  describe('not exist initialState', () => {
    it('returns default initialState', () => {
      const state = reducer(undefined, {
        type: 'nope',
      });

      expect(state.input.name).toBe('');
      expect(state.input.category).toBe('');
      expect(state.input.address).toBe('');
    });
  });
});
