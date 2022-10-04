import updateReservation from './actions';

import reducer from './reducer';

describe('Reducer', () => {
  describe('Update titles', () => {
    it('Change list title', () => {
      const state = reducer({
        listTitle: '',
      }, updateListTitle('백암'));

      expect(state.listTitle).toBe('백암');
    });
  });

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
