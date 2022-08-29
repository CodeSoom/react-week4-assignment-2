import reducer from './reducer';

import {
  updateInformation,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  it('returns initial state at initial situation', () => {
    const state = reducer(undefined, {});

    expect(state.restaurants).toHaveLength(0);
  });

  context('when recieving unspecified action type', () => {
    it('returns recevied state as is', () => {
      const settingState = {
        information: {
          name: 'New Name',
          classification: 'New Classification',
          address: 'New Address',
        },
        restaurants: [
          {
            id: 1,
            name: 'Name-1',
            classification: 'Classification-1',
            address: 'Address-1',
          },
        ],
      };

      const { information, restaurants } = reducer(settingState, {});

      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      for (const category in information) {
        expect(information[category]).toBe(settingState.information[category]);
      }

      restaurants.forEach((restaurant, index) => {
        expect(restaurant.id).toBe(settingState.restaurants[index].id);
        expect(restaurant.name).toBe(settingState.restaurants[index].name);
        expect(restaurant.classification).toBe(settingState.restaurants[index].classification);
        expect(restaurant.address).toBe(settingState.restaurants[index].address);
      });
    });
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

  describe('addRestaurant', () => {
    function reduceAddRestaurant({
      name = '',
      classification = '',
      address = '',
    } = {}) {
      return (reducer({
        information: {
          name,
          classification,
          address,
        },
        restaurants: [],
      }, addRestaurant()));
    }

    context('with full information', () => {
      it('appends a new restaurant into restaurants', () => {
        const { restaurants } = reduceAddRestaurant({
          name: 'New Name',
          classification: 'New Classification',
          address: 'New Address',
        });

        expect(restaurants).toHaveLength(1);
        expect(restaurants[0].name).toBe('New Name');
        expect(restaurants[0].classification).toBe('New Classification');
        expect(restaurants[0].address).toBe('New Address');
      });

      it('clears information', () => {
        const { information } = reduceAddRestaurant({
          name: 'New Name',
          classification: 'New Classification',
          address: 'New Address',
        });

        expect(information.name).toBe('');
        expect(information.classification).toBe('');
        expect(information.address).toBe('');
      });
    });

    context('with empty information at least one', () => {
      it("doesn't work", () => {
        const { restaurants } = reduceAddRestaurant({
          name: 'New Name',
          classification: '',
          address: 'New Address',
        });

        expect(restaurants).toHaveLength(0);
      });
    });
  });
});
