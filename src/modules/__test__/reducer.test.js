import reducer from '../reducer';

import {
  updateReservation,
  addReservation,
} from '../actions';

describe('reducer', () => {
  describe('updateReservation', () => {
    it('changes reservation name', () => {
      const state = reducer({
        reservation: {
          name: '',
        },
      }, updateReservation({ target: 'name', value: 'New Name' }));

      expect(state.reservation.name).toBe('New Name');
    });

    it('changes reservation category', () => {
      const state = reducer({
        reservation: {
          category: '',
        },
      }, updateReservation({ target: 'category', value: 'New Category' }));

      expect(state.reservation.category).toBe('New Category');
    });

    it('changes reservation address', () => {
      const state = reducer({
        reservation: {
          address: '',
        },
      }, updateReservation({ target: 'address', value: 'New Address' }));

      expect(state.reservation.address).toBe('New Address');
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
