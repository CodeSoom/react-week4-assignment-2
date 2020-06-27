import reducer from './reducer';

import {
  updateInformations,
  addRestaurant,
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

  describe('addRestaurant', () => {
    context('with new informations', () => {
      const previousState = {
        newId: 1,
        informations: {
          name: '한식당',
          category: '한식',
          address: '강남구',
        },
        restaurants: [],
      };

      it('restaurants에 새로운 restaurant이 추가된다.', () => {
        const newState = reducer(previousState, addRestaurant());

        expect(newState.restaurants).toHaveLength(1);
      });

      it('추가된 restaurant에 id가 부여된다.', () => {
        const newState = reducer(previousState, addRestaurant());

        expect(newState.restaurants[0].id).toBe(1);
        expect(newState.newId).toBe(1 + 1);
      });

      it('informations가 초기화 된다.', () => {
        const newState = reducer(previousState, addRestaurant());

        const { name, category, address } = newState.informations;

        expect(name).toBe('');
        expect(category).toBe('');
        expect(address).toBe('');
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
