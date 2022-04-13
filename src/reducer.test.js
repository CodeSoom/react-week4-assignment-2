import reducer from './reducer';

import {
  updateName,
  updateCategory,
  updateAddress,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  describe('updateName', () => {
    it('changes the restaurant name', () => {
      const state = reducer({
        name: '',
      }, updateName({ name: 'New restaurant' }));

      expect(state.name).toBe('New restaurant');
    });
  });

  describe('updateCategory', () => {
    it('changes the restaurant category', () => {
      const state = reducer({
        category: '',
      }, updateCategory({ category: 'New category' }));

      expect(state.category).toBe('New category');
    });
  });

  describe('updateAddress', () => {
    it('changes the restaurant address', () => {
      const state = reducer({
        address: '',
      }, updateAddress({ address: 'New address' }));

      expect(state.address).toBe('New address');
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

  describe('without actions', () => {
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
