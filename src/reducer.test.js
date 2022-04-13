import reducer from './reducer';

import {
  updateInformation,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  describe('updateInformation', () => {
    context('with information', () => {
      it('changes the restaurant information', () => {
        const state = reducer({
          information: {
            name: '',
            category: '',
            address: '',
          },
        }, updateInformation({
          information: {
            name: 'New restaurant',
            category: 'New category',
            address: 'New address',
          },
        }));

        expect(state.information.name).toBe('New restaurant');
        expect(state.information.category).toBe('New category');
        expect(state.information.address).toBe('New address');
      });
    });

    context('without information', () => {
      it('does nothing', () => {
        const state = reducer({
          information: {
            name: '브루클린 버거',
            category: '양식',
            address: '서래마을',
          },
        }, updateInformation({ review: 'The food is so good' }));

        expect(state.information.name).toBe('브루클린 버거');
        expect(state.information.category).toBe('양식');
        expect(state.information.address).toBe('서래마을');
      });
    });
  });

  describe('addRestaurant', () => {
    function reduceAddRestaurant({ information }) {
      return reducer({
        newId: 100,
        information,
        restaurants: [],
      }, addRestaurant());
    }

    context('with restaurant name, category and address information', () => {
      it('adds a new restaurant', () => {
        const state = reduceAddRestaurant({
          information: {
            name: '브루클린 버거',
            category: '양식',
            address: '서래마을',
          },
        });

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).not.toBeUndefined();
        expect(state.restaurants[0].information.name).toBe('브루클린 버거');
        expect(state.restaurants[0].information.category).toBe('양식');
        expect(state.restaurants[0].information.address).toBe('서래마을');
      });

      it('clears the task title', () => {
        const state = reduceAddRestaurant({
          information: {
            name: '브루클린 버거',
            category: '양식',
            address: '서래마을',
          },
        });

        expect(state.information.name).toBe('');
        expect(state.information.category).toBe('');
        expect(state.information.address).toBe('');
      });
    });

    context('without restaurant name', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          information: {
            name: '',
            category: '양식',
            address: '서래마을',
          },
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without restaurant category', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          information: {
            name: '브루클린 버거',
            category: '',
            address: '서래마을',
          },
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without restaurant address', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          information: {
            name: '브루클린 버거',
            category: '양식',
            address: '',
          },
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });

  context('without actions', () => {
    const someFunction = jest.fn(({ information }) => ({
      type: 'someFunction',
      payload: {
        information,
      },
    }));

    it('doesn\'t change initial state', () => {
      const state = reducer(undefined, someFunction({
        name: '브루클린 버거',
        category: '양식',
        address: '서래마을',
      }));

      expect(state.newId).toBe(100);
      expect(state.information.name).toBe('');
      expect(state.information.category).toBe('');
      expect(state.information.address).toBe('');
      expect(state.restaurants).toHaveLength(0);
    });
  });
});
