import reducer, { initialState } from './reducer';

import { addRestaurant, updateInput } from './actions';

describe('reducer', () => {
  describe('addRestaurant', () => {
    context('with input data', () => {
      it('returns state with append restaurants data', () => {
        const state = reducer(
          {
            restaurant: {
              name: '마녀주방',
              category: '양식',
              address: '서울시 강남구',
            },
            restaurants: [],
          },
          addRestaurant(),
        );

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].name).toBe('마녀주방');
        expect(state.restaurants[0].category).toBe('양식');
        expect(state.restaurants[0].address).toBe('서울시 강남구');
      });
    });

    context('without all input data', () => {
      it('doesnt work', () => {
        const state = reducer(
          {
            restaurant: {
              name: '',
              category: '',
              address: '',
            },
            restaurants: [],
          },
          addRestaurant(),
        );

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });

  describe('changeInput', () => {
    context('with change name input data', () => {
      it('returns state with changed input data', () => {
        const state = reducer(
          initialState,
          updateInput({ key: 'name', value: '바보' }),
        );

        expect(state.restaurant.name).toBe('바보');
      });
    });

    context('with change category input data', () => {
      it('returns state with changed input data', () => {
        const state = reducer(
          initialState,
          updateInput({ key: 'category', value: '바보' }),
        );

        expect(state.restaurant.category).toBe('바보');
      });
    });

    context('with change address input data', () => {
      it('returns state with changed input data', () => {
        const state = reducer(
          initialState,
          updateInput({ key: 'address', value: '바보' }),
        );

        expect(state.restaurant.address).toBe('바보');
      });
    });
  });

  describe('not exist action type', () => {
    it('returns original state', () => {
      const state = reducer(initialState, {
        type: 'nope',
      });

      expect(state.restaurant.name).toBe('');
      expect(state.restaurant.category).toBe('');
      expect(state.restaurant.address).toBe('');
    });
  });

  describe('not exist initialState', () => {
    it('returns default initialState', () => {
      const state = reducer(undefined, {
        type: 'nope',
      });

      expect(state.restaurant.name).toBe('');
      expect(state.restaurant.category).toBe('');
      expect(state.restaurant.address).toBe('');
    });
  });
});
