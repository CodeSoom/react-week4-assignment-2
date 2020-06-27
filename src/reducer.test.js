import reducer from './reducer';

import { addRestaurnt } from './actions';
describe('reducer', () => {

  const restaurants = [
    {
      id: 0, name: 'test_0', category: 'test_0_category', address: 'test_0_address',
    },
    {
      id: 1, name: 'test_1', category: 'test_1_category', address: 'test_1_address',
    },
  ];

  context('with no matched action', () => {
    it('return same state', () => {
      const state = reducer({}, { type: 'test' });

      expect(state).toEqual({});
    });
  });

  describe('add restaurant', () => {
    context('when with value on name, category, address', () => {
      it('append a new restaurant into restaurants', () => {
        const state = reducer({
          newId: 3,
          name: 'test_name',
          category: 'test_category',
          address: 'test_address',
          restaurants,
        }, addRestaurnt());

        expect(state.name).toBe('');
        expect(state.category).toBe('');
        expect(state.address).toBe('');

        expect(state.restaurants.length).toEqual(3);

        state.restaurants.forEach((eachRestaruant) => {
          expect(state.restaurants[eachRestaruant].name).toBe(restaurants[eachRestaruant].name);
          expect(state.restaurants[eachRestaruant].category).toBe(restaurants[eachRestaruant].category);
          expect(state.restaurants[eachRestaruant].address).toBe(restaurants[eachRestaruant].address);
        });
      });
    });
  });
});
