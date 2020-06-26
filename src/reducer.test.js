import reducer from './reducer';

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
        const newState = reducer(previousState, {
          type: 'updateInformations',
          payload: {
            target: 'name',
            value: '한식당',
          },
        });

        expect(newState.informations.name).toEqual('한식당');
      });

      it('new state를 반환한다.', () => {
        const newState = reducer(previousState, {
          type: 'updateInformations',
          payload: {
            target: 'category',
            value: '한식',
          },
        });

        expect(newState.informations.category).toEqual('한식');
      });

      it('new state를 반환한다.', () => {
        const newState = reducer(previousState, {
          type: 'updateInformations',
          payload: {
            target: 'address',
            value: '강남구',
          },
        });

        expect(newState.informations.address).toEqual('강남구');
      });
    });
  });
});
