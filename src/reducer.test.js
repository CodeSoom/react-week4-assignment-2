import reducer from './reducer';

import {
  changeRestaurant, saveNewRestaurant, setInitialRestaurants,
} from './actions';

describe('reducer', () => {
  const testState = {
    newId: 2,
    newRestaurant: {
      name: '고봉민김밥',
      category: '분식',
      address: '강남',
    },
    restaurants: [{
      id: 1, name: '맘스터치', category: '패스트푸드', address: '용인수지',
    }],
  };

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
        const state = reducer(testState, changeRestaurant('name', '고봉민김밥2'));

        expect(state.newRestaurant.name).toBe('고봉민김밥2');
      });
    });

    context('when add category', () => {
      it('changes category', () => {
        const state = reducer(testState, changeRestaurant('category', '분식2'));

        expect(state.newRestaurant.category).toBe('분식2');
      });
    });

    context('when add address', () => {
      it('changes address', () => {
        const state = reducer(testState, changeRestaurant('address', '강남2'));

        expect(state.newRestaurant.address).toBe('강남2');
      });
    });
  });

  describe('saveNewRestaurant', () => {
    it('appends a new restaurant into restaurants', () => {
      const state = reducer(testState, saveNewRestaurant());

      expect(state.restaurants[1].id).not.toBeUndefined();
      expect(state.restaurants[1].name).toBe('고봉민김밥');
      expect(state.restaurants[1].category).toBe('분식');
      expect(state.restaurants[1].address).toBe('강남');
    });
  });

  describe('setInitialRestaurants', () => {
    it('sets initial restaurants list', () => {
      const state = reducer(
        undefined,
        setInitialRestaurants(testState.restaurants),
      );

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurants[0].id).not.toBeUndefined();
      expect(state.restaurants[0].name).toBe('맘스터치');
      expect(state.restaurants[0].category).toBe('패스트푸드');
      expect(state.restaurants[0].address).toBe('용인수지');
    });
  });
});
