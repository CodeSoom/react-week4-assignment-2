import reducer from './reducer';

import { changeName, changeType, changeAddress, addRestaurant } from './action';

describe('reducer', () => {
  describe('changeRestaurant', () => {
    const prevState = {
      restaurants: [],
      restaurantName: '',
      restaurantType: '',
      restaurantAddress: '',
    };

    context('changeName', () => {
      it('change a restaurant name', () => {
        const newState = reducer(prevState, changeName('New restaurantName'));

        expect(newState.restaurantName).toBe('New restaurantName');
      });
    });

    context('changeType', () => {
      it('change a restaurant type', () => {
        const newState = reducer(prevState, changeType('New restaurantType'));

        expect(newState.restaurantType).toBe('New restaurantType');
      });
    });

    context('changeAddress', () => {
      it('change a restaurant address', () => {
        const newState = reducer(
          prevState,
          changeAddress('New restaurantAddress'),
        );

        expect(newState.restaurantAddress).toBe('New restaurantAddress');
      });
    });
  });

  describe('addRestaurant', () => {
    it('clear a restaurant input', () => {
      const prevState = {
        restaurants: [],
        restaurantName: 'New restaurantName',
        restaurantType: 'New restaurantType',
        restaurantAddress: 'New restaurantAddress',
      };

      const newState = reducer(prevState, addRestaurant());

      expect(newState.restaurantName).toBe('');
      expect(newState.restaurantType).toBe('');
      expect(newState.restaurantType).toBe('');
    });

    it('appends a new restaurant into restaurants', () => {
      const prevState = {
        restaurants: [],
        restaurantName: 'New restaurantName',
        restaurantType: 'New restaurantType',
        restaurantAddress: 'New restaurantAddress',
      };

      const newState = reducer(prevState, addRestaurant());

      expect(newState.restaurants).toHaveLength(1);
    });
  });

  describe('without previousState', () => {
    it('returns previousState', () => {
      const newState = reducer(undefined, {});

      expect(newState.restaurantName).toBe('');
      expect(newState.restaurantType).toBe('');
      expect(newState.restaurantAddress).toBe('');
      expect(newState.restaurants).toHaveLength(0);
    });
  });

  describe('without action', () => {
    it('returns previousState', () => {
      const prevState = {
        restaurants: [],
        restaurantName: '',
        restaurantType: '',
        restaurantAddress: '',
      };

      const newState = reducer(prevState, null);

      expect(newState.restaurantName).toBe('');
      expect(newState.restaurantType).toBe('');
      expect(newState.restaurantAddress).toBe('');
      expect(newState.restaurants).toHaveLength(0);
    });
  });
});
