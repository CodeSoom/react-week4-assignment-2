import {
  updateReservation,
  updateName,
  updateCategory,
  updateAddress,
} from './actions';

import reducer from './reducer';

describe('Reducer', () => {
  describe('Update titles', () => {
    it('Change list title', () => {
      const state = reducer({
        listName: '',
      }, updateName('백암'));

      expect(state.listName).toBe('백암');
    });

    it('Change list menu', () => {
      const state = reducer({
        listCategory: '',
      }, updateCategory('순대국'));

      expect(state.listCategory).toBe('순대국');
    });

    it('Change list address', () => {
      const state = reducer({
        listAddress: '',
      }, updateAddress('영등포'));

      expect(state.listAddress).toBe('영등포');
    });
  });

  describe('Update reservation', () => {
    context('with titles', () => {
      it('appends new list', () => {
        const state = reducer({
          newId: 10,
          listName: '백암순대',
          listCategory: '순댓국',
          listAddress: '영등포구 여의도동',
          list: [],
        }, updateReservation());

        expect(state.list).toHaveLength(1);
      });
    });

    context('without titles', () => {
      it('doesnt work', () => {
        const state = reducer({
          newId: 10,
          listName: '',
          listCategory: '',
          listAddress: '',
          list: [],
        }, updateReservation());

        expect(state.list).toHaveLength(0);
      });
    });
  });
});
