import reducer from '../reducer';

import {
  updateReservationName,
  updateReservationCategory,
  updateReservationAddress,
  addReservation,
} from '../actions';

describe('reducer', () => {
  describe('updateReservationName', () => {
    it('changes reservation title', () => {
      const state = reducer({
        reservationName: '',
      }, updateReservationName('New Name'));

      expect(state.reservationName).toBe('New Name');
    });
  });

  describe('updateReservationCategory', () => {
    it('changes reservation category', () => {
      const state = reducer({
        reservationCategory: '',
      }, updateReservationCategory('New Category'));

      expect(state.reservationCategory).toBe('New Category');
    });
  });

  describe('updateReservationAddress', () => {
    it('changes reservation address', () => {
      const state = reducer({
        reservationAddress: '',
      }, updateReservationAddress('New Address'));

      expect(state.reservationAddress).toBe('New Address');
    });
  });

  describe('addReservation', () => {
    function reduceAddReservation({
      reservationName,
      reservationCategory,
      reservationAddress,
    }) {
      return reducer({
        newId: 1,
        reservationName,
        reservationCategory,
        reservationAddress,
        reservations: [],
      }, addReservation());
    }

    context('with all reservation fields', () => {
      it('appends a new reservation', () => {
        const state = reduceAddReservation({
          reservationName: 'New Name',
          reservationCategory: 'New Category',
          reservationAddress: 'New Address',
        });

        expect(state.reservations[0].name).toBe('New Name');
        expect(state.reservations[0].category).toBe('New Category');
        expect(state.reservations[0].address).toBe('New Address');
      });
    });

    context('without some reservation fields', () => {
      it('appends a new reservation', () => {
        const state = reduceAddReservation({
          reservationName: '',
          reservationCategory: 'New Category',
          reservationAddress: 'New Address',
        });

        expect(state.reservations).toHaveLength(0);
      });
    });
  });
});
