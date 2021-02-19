import reducer from './reducer';

import {
  updateRestaurant,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  const restaurant = {
    id: 101,
    name: '베이징',
    category: '중식',
    address: '파주시',
  };

  it('sets state as default parameter', () => {
    const state = reducer();

    const {
      restaurant: {
        id, name, category, address,
      }, restaurants,
    } = state;

    expect(id).toBe(100);
    expect(name).toBe('');
    expect(category).toBe('');
    expect(address).toBe('');
    expect(restaurants).toHaveLength(0);
  });

  context('without action type', () => {
    it("doesn't change state", () => {
      const state = reducer({
        restaurant,
      }, undefined);

      expect(state.restaurant).toBe(restaurant);
    });
  });

  context('with action type', () => {
    describe('updateRestaurant', () => {
      it('changes the name of the restaurant', () => {
        const state = reducer({
          restaurant,
        }, updateRestaurant({ name: '봉참치' }));

        expect(state.restaurant.name).toBe('봉참치');
      });

      it('changes the category of the restaurant', () => {
        const state = reducer({
          restaurant,
        }, updateRestaurant({ category: '일식' }));

        expect(state.restaurant.category).toBe('일식');
      });

      it('changes the address of the restaurant', () => {
        const state = reducer({
          restaurant,
        }, updateRestaurant({ address: '서울' }));

        expect(state.restaurant.address).toBe('서울');
      });
    });

    describe('addRestaurant', () => {
      context('without restaurant', () => {
        it("doesn't work", () => {
          const state = reducer({
            restaurant: {
              name: '',
              category: '',
              address: '',
            },
            restaurants: [],
          }, addRestaurant());

          expect(state.restaurants).toHaveLength(0);
        });
      });

      context('with restauant', () => {
        it('appends a new restaurant into the restaurant list', () => {
          const state = reducer({
            restaurant,
            restaurants: [],
          }, addRestaurant(restaurant));

          expect(state.restaurants).toHaveLength(1);
          expect(state.restaurants[0].name).not.toBeNull();
          expect(state.restaurants[0].category).not.toBeNull();
          expect(state.restaurants[0].address).not.toBeNull();
        });
      });
    });
  });
});
