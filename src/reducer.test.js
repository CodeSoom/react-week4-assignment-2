import reducer from './reducer';

import {
  changeRestaurantName,
  changeRestaurantCuisine,
  changeRestaurantLocation,
  clickAddRestaurant,
} from './actions';

describe('reducer', () => {
  context('without state or action', () => {
    it('returns state', () => {
      const initialState = {
        newId: 1,
        restaurants: [],
        restaurantName: '',
        restaurantCuisine: '',
        restaurantLocation: '',
      };

      expect(reducer()).toEqual(initialState);
    });
  });

  context('without action', () => {
    it('returns state', () => {
      const previousState = {
        restaurantName: '시카고 피자',
        restaurantCuisine: '양식',
        restaurantLocation: '이태원동',
      };

      const state = reducer(previousState);

      expect(state).toBe(previousState);
    });
  });

  context('with action', () => {
    describe('changeRestaurantName', () => {
      it('changes restaurant name', () => {
        const previousState = {
          restaurantName: '',
        };

        const state = reducer(
          previousState,
          changeRestaurantName('시카고 피자'),
        );

        expect(state.restaurantName).toBe('시카고 피자');
      });
    });

    describe('changeRestaurantCuisine', () => {
      it('changes restaurant cuisine', () => {
        const previousState = {
          restaurantCuisine: '',
        };

        const state = reducer(
          previousState,
          changeRestaurantCuisine('양식'),
        );

        expect(state.restaurantCuisine).toBe('양식');
      });
    });

    describe('changeRestaurantLocation', () => {
      it('changes restaurant cuisine', () => {
        const previousState = {
          restaurantLocation: '',
        };

        const state = reducer(
          previousState,
          changeRestaurantLocation('이태원동'),
        );

        expect(state.restaurantLocation).toBe('이태원동');
      });
    });

    describe('clickAddRestaurant', () => {
      it('adds restaurant to the list', () => {
        const previousState = {
          restaurants: [],
          restaurantName: '시카고 피자',
          restaurantCuisine: '양식',
          restaurantLocation: '이태원동',
        };

        const state = reducer(
          previousState,
          clickAddRestaurant(),
        );

        expect(state.restaurants[0]).toEqual({
          restaurantName: '시카고 피자',
          restaurantCuisine: '양식',
          restaurantLocation: '이태원동',
        });
      });

      it('clears restaurant name, cuisine, and location', () => {
        const previousState = {
          restaurants: [],
          restaurantName: '시카고 피자',
          restaurantCuisine: '양식',
          restaurantLocation: '이태원동',
        };

        const state = reducer(
          previousState,
          clickAddRestaurant(),
        );

        expect(state.restaurantName).toBe('');
        expect(state.restaurantCuisine).toBe('');
        expect(state.restaurantLocation).toBe('');
      });
    });
  });
});
