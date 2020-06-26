import reducer from './reducer';

describe('reducer', () => {
  describe('updateName', () => {
    it('이름이 변경된다.', () => {
      const previousState = {
        name: '',
      };

      const action = {
        type: 'updateName',
        payload: {
          name: '콩나물해장국',
        },
      };

      const state = reducer(previousState, action);

      expect(state.name).toBe('콩나물해장국');
    });
  });
});
