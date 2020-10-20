import reducer from './reducer';

import {
  onChange,
  onClick,
} from './actions';

describe('reducer', () => {
  context('without state or action', () => {
    it('returns state', () => {
      const initialState = {
        newId: 1,
        restaurants: [],
        restaurant: {
          name: '',
          category: '',
          address: '',
        },
      };

      expect(reducer()).toEqual(initialState);
    });
  });

  context('without action', () => {
    it('returns state', () => {
      const previousState = {
        restaurant: {
          name: '시카고 피자',
          category: '양식',
          address: '이태원동',
        },
      };

      const state = reducer(previousState);

      expect(state).toBe(previousState);
    });
  });

  context('with action', () => {
    describe('changeName', () => {
      it('changes restaurant name', () => {
        const previousState = {
          restaurant: {
            name: '',
          },
        };

        const state = reducer(
          previousState,
          onChange({ name: 'name', value: '시카고 피자' }),
        );

        expect(state.restaurant.name).toBe('시카고 피자');
      });
    });

    describe('changeCategory', () => {
      it('changes restaurant category', () => {
        const previousState = {
          category: '',
        };

        const state = reducer(
          previousState,
          onChange({ name: 'category', value: '양식' }),
        );

        expect(state.restaurant.category).toBe('양식');
      });
    });

    describe('changeAddress', () => {
      it('changes restaurant category', () => {
        const previousState = {
          address: '',
        };

        const state = reducer(
          previousState,
          onChange({ name: 'address', value: '이태원동' }),
        );

        expect(state.restaurant.address).toBe('이태원동');
      });
    });

    describe('clickAddRestaurant', () => {
      it('adds restaurant to the list', () => {
        const previousState = {
          newId: 1,
          restaurants: [],
          restaurant: {
            name: '시카고 피자',
            category: '양식',
            address: '이태원동',
          },
        };

        const state = reducer(
          previousState,
          onClick(),
        );

        expect(state.restaurants[0]).toEqual({
          id: 1,
          name: '시카고 피자',
          category: '양식',
          address: '이태원동',
        });
      });

      it('clears restaurant name, category, and address', () => {
        const previousState = {
          restaurants: [],
          restaurant: {
            name: '시카고 피자',
            category: '양식',
            address: '이태원동',
          },
        };

        const state = reducer(
          previousState,
          onClick(),
        );

        const { restaurant } = state;

        expect(restaurant).toEqual({
          name: '', category: '', address: '',
        });
      });
    });
  });
});
