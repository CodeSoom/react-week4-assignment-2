import reducer from './reducer';

import {
  updateInformation,
  addInformation,
  initializeInformation,
} from './actions';

describe('reducer', () => {
  describe('updateInformation', () => {
    it('changes typed restaurant information', () => {
      const state = reducer({
        infoValue: {
          name: '',
          category: '',
          address: '',
        },
      }, updateInformation({
        name: 'name',
        value: 'New info',
      }));

      expect(state.infoValue.name).toBe('New info');
    });
  });

  describe('addInformation', () => {
    it('appends new restaurant into restaurants', () => {
      const state = reducer({
        restaurants: [],
        newId: 100,
      }, addInformation({
        name: '밥',
        category: '한식',
        address: '서울',
      }));

      expect(state.restaurants).toHaveLength(1);

      expect(state.restaurants[0].name).toBe('밥');
      expect(state.restaurants[0].category).toBe('한식');
      expect(state.restaurants[0].address).toBe('서울');
    });
  });

  describe('initializeInformation', () => {
    it('clears all information after appending', () => {
      const state = reducer({
        infoValue: {
          name: '밥',
          category: '한식',
          address: '서울',
        },
        newId: 100,
      }, initializeInformation());

      expect(state.infoValue.name).toBe('');
      expect(state.infoValue.category).toBe('');
      expect(state.infoValue.address).toBe('');
    });
  });

  describe('Unhandled action type', () => {
    it("reducer doesn't work", () => {
      const state = reducer(undefined, { type: 'Unhandled action type' });

      expect(state).toBe(state);
    });
  });
});
