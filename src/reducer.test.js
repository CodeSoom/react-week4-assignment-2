import reducer from './reducer';

import {
  updateInformations,
} from './actions';

describe('reducer', () => {
  describe('updateInformations', () => {
    context('with new informations', () => {
      const previousState = {
        informations: {
          name: '',
          category: '',
          address: '',
        },
      };

      it('new state를 반환한다.', () => {
        const newState = reducer(previousState, updateInformations('name', '한식당'));

        expect(newState.informations.name).toEqual('한식당');
      });

      it('new state를 반환한다.', () => {
        const newState = reducer(previousState, updateInformations('category', '한식'));

        expect(newState.informations.category).toEqual('한식');
      });

      it('new state를 반환한다.', () => {
        const newState = reducer(previousState, updateInformations('address', '강남구'));

        expect(newState.informations.address).toEqual('강남구');
      });
    });
  });

  context('without existed action', () => {
    it('state를 반환한다.', () => {
      const state = reducer({
        informations: {
          name: '마녀식당',
          category: '한식',
          address: '강남구',
        },
      }, {
        type: 'notExistedAction',
      });

      expect(state).toEqual({
        informations: {
          name: '마녀식당',
          category: '한식',
          address: '강남구',
        },
      });
    });
  });

  context('without state', () => {
    it('initialState를 사용한다.', () => {
      const state = reducer(undefined, updateInformations('name', '한식당'));

      expect(state.informations.name).toBe('한식당');
    });
  });
});
