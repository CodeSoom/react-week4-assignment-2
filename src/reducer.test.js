import reducer from './reducer';

import {
  changeRestaurant, saveNewRestaurant, setInitialRestaurants,
} from './actions';
import {
  testState, name, category, address, restaurants,
} from '../fixture/test-data';

describe('reducer', () => {
  const triggerMockAction = () => ({ action: 'mockAction' });

  context('when reducer is executed first time', () => {
    it('set initial state', () => {
      const state = reducer(undefined, triggerMockAction());

      expect(state.newId).not.toBeNull();
      expect(state.newRestaurant.name).toHaveLength(0);
      expect(state.newRestaurant.category).toHaveLength(0);
      expect(state.newRestaurant.address).toHaveLength(0);
      expect(state.restaurants).toHaveLength(0);
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

      expect(state.restaurants[1].id).not.toBeUndefined();
      expect(state.restaurants[1].name).toBe(testState.newRestaurant.name);
      expect(state.restaurants[1].category).toBe(testState.newRestaurant.category);
      expect(state.restaurants[1].address).toBe(testState.newRestaurant.address);
    });
  });

  describe('setInitialRestaurants', () => {
    it('sets initial restaurants list', () => {
      const state = reducer(
        undefined,
        setInitialRestaurants(restaurants),
      );

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurants[0].id).not.toBeUndefined();
      expect(state.restaurants[0].name).toBe(restaurants[0].name);
      expect(state.restaurants[0].category).toBe(restaurants[0].category);
      expect(state.restaurants[0].address).toBe(restaurants[0].address);
    });
  });
});
