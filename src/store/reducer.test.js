import given from 'given2';

import reducer, { initialState } from './reducer';

import {
  updateName, updateAddress, updateCategory, addRestaurant,
} from './actions';

describe('reducer', () => {
  given('state', () => initialState);

  context('state가 없으면', () => {
    it('initialState를 초기 상태로 가진다.', () => {
      const state = reducer(undefined, {});

      expect(state).toEqual(initialState);
    });
  });

  context('state가 있으면', () => {
    describe('updateName', () => {
      it('name이 변경된다.', () => {
        const state = reducer(given.state, updateName('마녀주방'));

        expect(state.name).toBe('마녀주방');
      });
    });

    describe('updateCategory', () => {
      it('category가 변경된다.', () => {
        const state = reducer(given.state, updateCategory('한식'));

        expect(state.category).toBe('한식');
      });
    });

    describe('updateAddress', () => {
      it('address가 변경된다.', () => {
        const state = reducer(given.state, updateAddress('서울시 강남구'));

        expect(state.address).toBe('서울시 강남구');
      });
    });

    describe('addRestaurant', () => {
      const reduceAddRestaurant = () => reducer(given.state, addRestaurant());

      it('레스토링이 추가된다.', () => {
        given('state', () => ({
          ...initialState,
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
          restaurants: [],
        }));

        const state = reduceAddRestaurant();

        expect(state.restaurants).toHaveLength(1);
      });

      it('newId가 증가한다.', () => {
        given('state', () => ({
          ...initialState,
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
          restaurants: [],
        }));

        const state = reduceAddRestaurant();

        expect(state.newId).toBe(given.state.newId + 1);
      });

      it('input이 초기화된다.', () => {
        given('state', () => ({
          ...initialState,
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
          restaurants: [],
        }));

        const state = reduceAddRestaurant();

        expect(state.name).toBe('');
        expect(state.category).toBe('');
        expect(state.address).toBe('');
      });
    });
  });
});
