import reducer from './reducer';

import {
  updateInformation,
  addInformation,
  initializeInformation,
} from './actions';

describe('reducer', () => {
  it('changes restaurant information', () => {
    const state = reducer({
      infoValue: {
        nameTitle: '',
        classification: '',
        location: '',
      },
    }, updateInformation({
      name: 'nameTitle',
      value: 'New info',
    }));

    expect(state.infoValue.nameTitle).toBe('New info');
  });

  describe('addInformation', () => {
    it('appends new restaurant into restaurants', () => {
      const state = reducer({
        restaurants: [],
        newId: 100,
      }, addInformation({
        nameTitle: '밥',
        classification: '한식',
        location: '서울',
      }));

      expect(state.restaurants).toHaveLength(1);

      expect(state.restaurants[0].nameTitle).toBe('밥');
      expect(state.restaurants[0].classification).toBe('한식');
      expect(state.restaurants[0].location).toBe('서울');
    });
  });

  describe('initializeInformation', () => {
    it('clears all information after appending', () => {
      const state = reducer({
        infoValue: {
          nameTitle: '밥',
          classification: '한식',
          location: '서울',
        },
        newId: 100,
      }, initializeInformation());

      expect(state.infoValue.nameTitle).toBe('');
      expect(state.infoValue.classification).toBe('');
      expect(state.infoValue.location).toBe('');
    });
  });
});
