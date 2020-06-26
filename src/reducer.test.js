import reducer from './reducer';

describe('reducer', () => {
  describe('updateName', () => {
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
