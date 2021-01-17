import reducer from './reducer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  const initialState = {
    newId: 100,
    restaurant: {
      name: '',
      category: '',
      address: '',
    },
    restaurants: [],
  };

  it('init state', () => {
    const state = reducer();
    expect(state).toStrictEqual(initialState);
  });

  it('unknown reducer', () => {
    const state = reducer(initialState, {
      type: 'deleteRestaurant',
      payload: {
        name: '마녀주방',
      },
    });
    expect(initialState).toBe(state);
  });

  describe('update restaurant', () => {
    it('changes a name of restaurant', () => {
      const state = reducer(initialState, updateRestaurantName('마녀주방'));

      expect(state.restaurant.name).toBe('마녀주방');
    });

    it('changes a category of restaurant', () => {
      const state = reducer(initialState, updateRestaurantCategory('양식'));

      expect(state.restaurant.category).toBe('양식');
    });

    it('changes a address of restaurant', () => {
      const state = reducer(initialState, updateRestaurantAddress('강남구 서현동'));

      expect(state.restaurant.address).toBe('강남구 서현동');
    });
  });

  describe('add a new restaurant', () => {
    function reduceAddRestaurant(restaurant) {
      return reducer({
        ...initialState,
        restaurant,
      }, addRestaurant());
    }

    context('with all information of restaurant', () => {
      const completeRestaurantInformation = {
        name: '마녀주방', category: '양식', address: '강남구 서현동',
      };

      it('adds a new restaurant', () => {
        const state = reduceAddRestaurant(completeRestaurantInformation);

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).not.toBeUndefined();
        expect(state.restaurants[0].id).toBe(100);
        expect(state.restaurants[0].name).toBe('마녀주방');
        expect(state.restaurants[0].category).toBe('양식');
        expect(state.restaurants[0].address).toBe('강남구 서현동');
      });
    });

    context('without one of information of restaurant', () => {
      const incompleteRestaurantInformation1 = {
        name: '', category: '', address: '',
      };

      it('nothing happens', () => {
        const state = reduceAddRestaurant(incompleteRestaurantInformation1);

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });
});
