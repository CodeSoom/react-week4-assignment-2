import updateReservation from './actions';
import reducer from './reducer';

describe('Reducer', () => {
  describe('Update reservation', () => {
    it('appends new list', () => {
      const state = reducer({
        newId: 10,
        listTitle: '백암순대',
        listMenu: '순댓국',
        listAddress: '영등포구 여의도동',
        list: [],
      }, updateReservation());

      expect(state.list).toHaveLength(1);
    });
  });
});
