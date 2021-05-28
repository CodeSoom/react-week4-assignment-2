import { setRestaurants } from '../actions/actions';

import reducer, { initialState } from './reducer';

describe('reducer', () => {
  context('with invalid action', () => {
    it('returns previous state', () => {
      expect(initialState).toEqual(reducer(undefined, { type: '' }));
    });
  });

  context('with valid action', () => {
    const restaurants = [
      {
        id: 1,
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
      {
        id: 2,
        name: '시카고피자',
        category: '양식',
        address: '이태원동',
      },
    ];

    const previousState = {
      name: '',
      category: '',
      address: '',
      restaurants,
    };

    describe('setRestaurants', () => {
      it('changes restaurants array', () => {
        const state = reducer({
          ...previousState,
          restaurants: [],
        }, setRestaurants(restaurants));

        expect(state.restaurants).not.toHaveLength(0);
      });
    });

    describe('updateRestaurantName', () => {
      it('changes restaurants name', () => {
        const state = reducer({
          ...previousState,
          name: '국밥',
        });

        expect(state.name).toBe('국밥');
      });
    });

    describe('updateRestaurantCategory', () => {
      it('changes restaurants category', () => {
        const state = reducer({
          ...previousState,
          category: '국',
        });

        expect(state.category).toBe('국');
      });
    });

    describe('updateRestaurantAddress', () => {
      it('changes restaurants address', () => {
        const state = reducer({
          ...previousState,
          address: '부산 연제구',
        });

        expect(state.address).toBe('부산 연제구');
      });
    });
  });
});
