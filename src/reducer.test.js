import reducer from './reducer';

import {
  updateInformation,
} from './actions';

describe('reducer', () => {
  it('returns initial state at initial situation', () => {
    const state = reducer(undefined, {});

    expect(state.restaurants).toHaveLength(0);
  });

  describe('updateInformation', () => {
    it('changes name', () => {
      const { information } = reducer({
        information: {
          name: '',
        },
      }, updateInformation('name', 'New Name'));

      expect(information.name).toBe('New Name');
    });

    it('changes classifiaction', () => {
      const { information } = reducer({
        information: {
          classifiaction: '',
        },
      }, updateInformation('classifiaction', 'New Classifiaction'));

      expect(information.classifiaction).toBe('New Classifiaction');
    });

    it('changes address', () => {
      const { information } = reducer({
        information: {
          address: '',
        },
      }, updateInformation('address', 'New Address'));

      expect(information.address).toBe('New Address');
    });
  });
});
