import {
  addRestaurant,
  setRestaurants,
  changeRestaurant,
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

    describe('changeRestaurant', () => {
      it('changes restaurant name', () => {
        const state = reducer(
          previousState,
          changeRestaurant({
            name: 'address',
            value: '서울시',
          }),
        );

        expect(state.address).toBe('서울시');
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
