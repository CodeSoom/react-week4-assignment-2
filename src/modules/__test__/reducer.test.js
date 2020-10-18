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
    function reduceAddReservation({ name, category, address }) {
      return reducer({
        newId: 1,
        reservation: { name, category, address },
        reservations: [],
      }, addReservation());
    }

    context('with all reservation fields', () => {
      it('appends a new reservation', () => {
        const state = reduceAddReservation({
          name: 'New Name',
          category: 'New Category',
          address: 'New Address',
        });

        expect(state.reservations[0].name).toBe('New Name');
        expect(state.reservations[0].category).toBe('New Category');
        expect(state.reservations[0].address).toBe('New Address');
      });
    });

    context('without reservation name', () => {
      it('not append reservation', () => {
        const state = reduceAddReservation({
          name: '',
          category: 'New Category',
          address: 'New Address',
        });

        expect(state.reservations).toHaveLength(0);
      });
    });

    context('without reservation category', () => {
      it('not append reservation', () => {
        const state = reduceAddReservation({
          name: 'New Name',
          category: '',
          address: 'New Address',
        });

        expect(state.reservations).toHaveLength(0);
      });
    });

    context('without reservation address', () => {
      it('not append reservation', () => {
        const state = reduceAddReservation({
          reservation: {
            name: 'New Name',
            category: 'New Category',
            address: '',
          },
        });

        expect(state.reservations).toHaveLength(0);
      });
    });

    context('without state', () => {
      it('not append reservation', () => {
        const state = reducer(undefined, addReservation());

        expect(state.reservations).toHaveLength(0);
      });
    });
  });

  describe('undefined action', () => {
    it('no action', () => {
      const state = reducer(undefined, { type: 'undefined', payload: {} });

      expect(state.reservations).toHaveLength(0);
    });
  });
});
