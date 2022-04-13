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
          name: '',
          category: '',
          address: '',
        }, updateInformation({
          information: {
            name: 'New restaurant',
            category: 'New category',
            address: 'New address',
          },
        }));

        expect(state.name).toBe('New restaurant');
        expect(state.category).toBe('New category');
        expect(state.address).toBe('New address');
      });
    });

    context('without information', () => {
      it('does nothing', () => {
        const state = reducer({
          name: '브루클린 버거',
          category: '양식',
          address: '서래마을',
        }, updateInformation({ review: 'The food is so good' }));

        expect(state.name).toBe('브루클린 버거');
        expect(state.category).toBe('양식');
        expect(state.address).toBe('서래마을');
      });
    });
  });

  describe('addRestaurant', () => {
    function reduceAddRestaurant({
      name,
      category,
      address,
    }) {
      return reducer({
        newId: 100,
        name,
        category,
        address,
        restaurants: [],
      }, addRestaurant());
    }

    context('with restaurant name, category and address', () => {
      const state = reduceAddRestaurant({
        name: '브루클린 버거',
        category: '양식',
        address: '서래마을',
      });

      it('adds a new restaurant', () => {
        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).not.toBeUndefined();
        expect(state.restaurants[0].name).toBe('브루클린 버거');
        expect(state.restaurants[0].category).toBe('양식');
        expect(state.restaurants[0].address).toBe('서래마을');
      });

      it('clears the task title', () => {
        expect(state.name).toBe('');
        expect(state.category).toBe('');
        expect(state.address).toBe('');
      });
    });

    context('without restaurant name', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          name: '',
          category: '양식',
          address: '서래마을',
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without restaurant category', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          name: '브루클린 버거',
          category: '',
          address: '서래마을',
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without restaurant address', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          name: '브루클린 버거',
          category: '양식',
          address: '',
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });

  context('without actions', () => {
    const someFunction = jest.fn(({ name, category, address }) => ({
      type: 'someFunction',
      payload: {
        name,
        category,
        address,
      },
    }));

    it('doesn\'t change initial state', () => {
      const state = reducer(undefined, someFunction({
        name: '브루클린 버거',
        category: '양식',
        address: '서래마을',
      }));

      expect(state.newId).toBe(100);
      expect(state.name).toBe('');
      expect(state.category).toBe('');
      expect(state.address).toBe('');
      expect(state.restaurants).toHaveLength(0);
    });
  });
});
