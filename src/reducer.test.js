import reducer from './reducer';

import { changeName, changeType, changeAddress, addRestaurant } from './action';

describe('reducer', () => {
  describe('changeRestaurant', () => {
    const prevState = {
      restaurants: [],
      restaurant: {
        name: '',
        type: '',
        address: '',
      },

    };

    context('changeName', () => {
      it('change a restaurant name', () => {
        const newState = reducer(prevState, changeName('New restaurantName'));

        expect(newState.restaurant.name).toBe('New restaurantName');
      });
    });

    context('changeType', () => {
      it('change a restaurant type', () => {
        const newState = reducer(prevState, changeType('New restaurantType'));

        expect(newState.restaurant.type).toBe('New restaurantType');
      });
    });

    context('changeAddress', () => {
      it('change a restaurant address', () => {
        const newState = reducer(
          prevState,
          changeAddress('New restaurantAddress'),
        );

        expect(newState.restaurant.address).toBe('New restaurantAddress');
      });
    });
  });

  describe('addRestaurant', () => {
    it('clear a restaurant input', () => {
      const prevState = {
        restaurants: [],
        restaurant: {
          name: 'New restaurantName',
          type: 'New restaurantType',
          address: 'New restaurantAddress',
        },
      };

      const newState = reducer(prevState, addRestaurant());

      expect(newState.restaurant.name).toBe('');
      expect(newState.restaurant.type).toBe('');
      expect(newState.restaurant.type).toBe('');
    });

    it('appends a new restaurant into restaurants', () => {
      const prevState = {
        restaurants: [],
        restaurant: {
          name: 'New restaurantName',
          type: 'New restaurantType',
          address: 'New restaurantAddress',
        },
      };

      const newState = reducer(prevState, addRestaurant());

      expect(newState.restaurants).toHaveLength(1);
    });
  });

  describe('without previousState', () => {
    it('returns previousState', () => {
      const newState = reducer(undefined, {});

      expect(newState.restaurant.name).toBe('');
      expect(newState.restaurant.type).toBe('');
      expect(newState.restaurant.address).toBe('');
      expect(newState.restaurants).toHaveLength(0);
    });
  });

  describe('without action', () => {
    it('returns previousState', () => {
      const prevState = {
        restaurants: [],
        restaurant: {
          name: '',
          type: '',
          address: '',
        },
      };

      const newState = reducer(prevState, null);

      expect(newState.restaurant.name).toBe('');
      expect(newState.restaurant.type).toBe('');
      expect(newState.restaurant.address).toBe('');
      expect(newState.restaurants).toHaveLength(0);
    });
  });
});
