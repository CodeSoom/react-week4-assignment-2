import reducer from './reducer';

import {
  changeName, changeCategory, changeAddress, clickSubmit,
} from './actions';

describe('reducer', () => {
  const testState = {
    newId: 2,
    name: '고봉민김밥',
    category: '분식',
    address: '강남',
    restaurants: [{
      id: 1, name: '맘스터치', category: '패스트푸드', address: '용인수지',
    }],
  };

  // TODO: set initial state
  // TODO: no action type
  // TODO: changeName test

  describe('changeCategory', () => {
    it('changes category', () => {
      const state = reducer(testState, changeCategory('패스트푸드2'));

      expect(state.address).toBe('패스트푸드2');
    });
  });

  describe('changeAddress', () => {
    it('changes address', () => {
      const state = reducer(testState, changeAddress('강남2'));

      expect(state.address).toBe('강남2');
    });
  });

  describe('clickSubmit', () => {
    context('when all inputs are filled', () => {
      it('appends a new restaurant into restaurants', () => {
        const state = reducer(testState, clickSubmit());

        expect(state.restaurants[1].id).not.toBeUndefined();
        expect(state.restaurants[1].name).toBe('고봉민김밥');
        expect(state.restaurants[1].category).toBe('분식');
        expect(state.restaurants[1].address).toBe('강남');
      });
    });
    context('when any input is missing', () => {
      it('appends a new restaurant with empty input', () => {
        // TODO: Decide how to handle empty cases later
        const state = reducer({
          ...testState,
          name: '',
        }, clickSubmit());
        expect(state.name).toBe('');
      });
    });
  });
});
