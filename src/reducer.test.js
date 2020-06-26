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
});
