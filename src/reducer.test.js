import reducer from './reducer';

describe('reducer', () => {
  describe('updateInformations', () => {
    context('with new informations', () => {
      it('new state를 반환한다.', () => {
        const state = {
          informations: {
            name: '',
            category: '',
            address: '',
          },
        };

        const newState = reducer(state, {
          type: 'updateInformations',
          payload: {
            target: 'name',
            value: '한식당',
          },
        });

        expect(newState.informations.name).toEqual('한식당');
      });
    });
  });
});
