import reducer from './reducer';

import {
  updateRestaurantName,
  updateRestaurantType,
  updateRestaurantAddress,
  addRestaurant,
} from './actions';

import restaurant from '../fixtures/restaurant';

describe('reducer', () => {
  context('without state', () => {
    const initialState = {
      restaurant: {
        name: '',
        type: '',
        address: '',
      },
      restaurants: [],
    };

    it('has the initial state', () => {
      const state = reducer(
        undefined,
        { type: undefined },
      );

      expect(state).toEqual(initialState);
    });
  });

  context('with unhandled actions', () => {
    it('does nothing', () => {
      const state = reducer(
        {
          restaurant,
        },
        { type: undefined },
      );

      expect(state).toEqual({
        restaurant,
      });
    });
  });

  describe('updateRestaurantName', () => {
    it('changes the restaurant name', () => {
      const state = reducer(
        {
          restaurant: {
            name: '',
          },
        },
        updateRestaurantName(restaurant.name),
      );

      expect(state.restaurant.name).toBe(restaurant.name);
    });
  });

  describe('updateRestaurantType', () => {
    it('changes the restaurant type', () => {
      const state = reducer(
        {
          restaurant: {
            type: '',
          },
        },
        updateRestaurantType(restaurant.type),
      );

      expect(state.restaurant.type).toBe(restaurant.type);
    });
  });

  describe('updateRestaurantAddress', () => {
    it('changes the restaurant address', () => {
      const state = reducer(
        {
          restaurant: {
            address: '',
          },
        },
        updateRestaurantAddress(restaurant.address),
      );

      expect(state.restaurant.address).toBe(restaurant.address);
    });
  });

  describe('addRestaurant', () => {
    const reduceAddRestaurant = ({
      restaurantName,
      restaurantType,
      restaurantAddress,
      newId,
    }) => reducer(
      {
        restaurant: {
          name: restaurantName,
          type: restaurantType,
          address: restaurantAddress,
        },
        restaurants: [],
      },
      addRestaurant(newId),
    );

    context('with a valid restaurant', () => {
      it('appends the restaurant with a new id into restaurants', () => {
        const newId = Date.now();

        const state = reduceAddRestaurant({
          restaurantName: restaurant.name,
          restaurantType: restaurant.type,
          restaurantAddress: restaurant.address,
          newId,
        });

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).toBe(newId);
        expect(state.restaurants[0].name).toBe(restaurant.name);
        expect(state.restaurants[0].type).toBe(restaurant.type);
        expect(state.restaurants[0].address).toBe(restaurant.address);
      });

      it('makes all properties of the restaurant blank', () => {
        const state = reduceAddRestaurant({
          restaurantName: restaurant.name,
          restaurantType: restaurant.type,
          restaurantAddress: restaurant.address,
          newId: Date.now(),
        });

        expect(state.restaurant.name).toBe('');
        expect(state.restaurant.type).toBe('');
        expect(state.restaurant.address).toBe('');
      });
    });

    context('without a new id', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          restaurantName: restaurant.name,
          restaurantType: restaurant.type,
          restaurantAddress: restaurant.address,
          newId: undefined,
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without the restaurant name', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          restaurantName: '',
          restaurantType: restaurant.type,
          restaurantAddress: restaurant.address,
          newId: Date.now(),
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without the restaurant type', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          restaurantName: restaurant.name,
          restaurantType: '',
          restaurantAddress: restaurant.address,
          newId: Date.now(),
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without the restaurant address', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          restaurantName: restaurant.name,
          restaurantType: restaurant.type,
          restaurantAddress: '',
          newId: Date.now(),
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });
});
