import {
  addRestaurant,
  setRestaurants,
  updateRestaurantAddress,
  updateRestaurantCategory,
  updateRestaurantName,
} from '../../actions/actions';

import reducer, { initialState } from '../../reducer/reducer';

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
        const state = reducer(
          previousState,
          updateRestaurantName('국밥'),
        );

        expect(state.name).toBe('국밥');
      });
    });

    describe('updateRestaurantCategory', () => {
      it('changes restaurants category', () => {
        const state = reducer(
          previousState,
          updateRestaurantCategory('국'),
        );

        expect(state.category).toBe('국');
      });
    });

    describe('updateRestaurantAddress', () => {
      it('changes restaurants address', () => {
        const state = reducer(
          previousState,
          updateRestaurantAddress('부산 연제구'),
        );

        expect(state.address).toBe('부산 연제구');
      });
    });

    describe('addRestaurant', () => {
      it('appends restaurant', () => {
        const state = reducer(
          previousState,
          addRestaurant(),
        );

        expect(state.newId).toBe(previousState.newId + 1);
        expect(state.restaurants).toHaveLength(3);
      });

      it('clears name, category, address', () => {
        const {
          name,
          category,
          address,
        } = reducer(
          previousState,
          addRestaurant(),
        );

        expect(name).toBe('');
        expect(category).toBe('');
        expect(address).toBe('');
      });
    });
  });
});
