import reducer from './reducer';

import {
  changeRestaurant, saveNewRestaurant, setInitialRestaurants,
} from './actions';

import {
  testState, name, category, address, restaurants,
} from '../fixture/test-data';

describe('reducer', () => {
  const triggerMockAction = () => ({ action: 'mockAction' });

  function expectToBeSame(expected, matched) {
    expect(expected.id).not.toBeUndefined();
    expect(expected.name).toBe(matched.name);
    expect(expected.category).toBe(matched.category);
    expect(expected.address).toBe(matched.address);
  }

  context('when reducer is executed first time', () => {
    it('set initial state', () => {
      const state = reducer(undefined, triggerMockAction());

      expect(state.newId).not.toBeNull();

      Object.values(state.newRestaurant).forEach((value) => {
        expect(value).toHaveLength(0);
      });
    });
  });

  context('when action type does not exist', () => {
    it('return previous state', () => {
      const state = reducer(testState, triggerMockAction());

      expect(state).toBe(testState);
    });
  });

  describe('changeRestaurant', () => {
    context('when add name', () => {
      it('changes name', () => {
        const state = reducer(testState, changeRestaurant('name', name));

        expect(state.newRestaurant.name).toBe(name);
      });
    });

    context('when add category', () => {
      it('changes category', () => {
        const state = reducer(testState, changeRestaurant('category', category));

        expect(state.newRestaurant.category).toBe(category);
      });
    });

    context('when add address', () => {
      it('changes address', () => {
        const state = reducer(testState, changeRestaurant('address', address));

        expect(state.newRestaurant.address).toBe(address);
      });
    });
  });

  describe('saveNewRestaurant', () => {
    it('appends a new restaurant into restaurants', () => {
      const state = reducer(testState, saveNewRestaurant());

      const newState = state.restaurants[1];
      const savedRestaurant = testState.newRestaurant;

      expectToBeSame(newState, savedRestaurant);
    });
  });

  describe('setInitialRestaurants', () => {
    it('sets initial restaurants list', () => {
      const state = reducer(
        undefined,
        setInitialRestaurants(restaurants),
      );

      const newState = state.restaurants[0];
      const initializedRestaurant = restaurants[0];

      expectToBeSame(newState, initializedRestaurant);
    });
  });
});
