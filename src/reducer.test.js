import reducer from './reducer';

import {
  changeName,
  changeCuisine,
  changeLocation,
  clickAddRestaurant,
} from './actions';

describe('reducer', () => {
  context('without state or action', () => {
    it('returns state', () => {
      const initialState = {
        newId: 1,
        restaurants: [],
        name: '',
        cuisine: '',
        location: '',
      };

      expect(reducer()).toEqual(initialState);
    });
  });

  context('without action', () => {
    it('returns state', () => {
      const previousState = {
        name: '시카고 피자',
        cuisine: '양식',
        location: '이태원동',
      };

      const state = reducer(previousState);

      expect(state).toBe(previousState);
    });
  });

  context('with action', () => {
    describe('changeName', () => {
      it('changes restaurant name', () => {
        const previousState = {
          name: '',
        };

        const state = reducer(
          previousState,
          changeName('시카고 피자'),
        );

        expect(state.name).toBe('시카고 피자');
      });
    });

    describe('changeCuisine', () => {
      it('changes restaurant cuisine', () => {
        const previousState = {
          cuisine: '',
        };

        const state = reducer(
          previousState,
          changeCuisine('양식'),
        );

        expect(state.cuisine).toBe('양식');
      });
    });

    describe('changeLocation', () => {
      it('changes restaurant cuisine', () => {
        const previousState = {
          location: '',
        };

        const state = reducer(
          previousState,
          changeLocation('이태원동'),
        );

        expect(state.location).toBe('이태원동');
      });
    });

    describe('clickAddRestaurant', () => {
      it('adds restaurant to the list', () => {
        const previousState = {
          restaurants: [],
          name: '시카고 피자',
          cuisine: '양식',
          location: '이태원동',
        };

        const state = reducer(
          previousState,
          clickAddRestaurant(),
        );

        expect(state.restaurants[0]).toEqual({
          name: '시카고 피자',
          cuisine: '양식',
          location: '이태원동',
        });
      });

      it('clears restaurant name, cuisine, and location', () => {
        const previousState = {
          restaurants: [],
          name: '시카고 피자',
          cuisine: '양식',
          location: '이태원동',
        };

        const state = reducer(
          previousState,
          clickAddRestaurant(),
        );

        const { name, cuisine, location } = state;

        expect(name).toBe('');
        expect(cuisine).toBe('');
        expect(location).toBe('');
      });
    });
  });
});
