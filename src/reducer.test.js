import reducer, { initialState } from './reducer';

describe('reducer', () => {
  describe('noType', () => {
    it('renders initial state', () => {
      const state = reducer();

      expect(state).toBe(initialState);
    });
  });

  describe('changeInput', () => {
    it('changes name', () => {
      const state = reducer({
        restaurantInformation: {
          name: '',
        },
      }, {
        type: 'changeInput',
        payload: {
          name: 'name',
          value: '마녀주방',
        },
      });

      expect(state.restaurantInformation.name).toBe('마녀주방');
    });

    it('changes category', () => {
      const state = reducer({
        restaurantInformation: {
          category: '',
        },
      }, {
        type: 'changeInput',
        payload: {
          name: 'category',
          value: '한식',
        },
      });

      expect(state.restaurantInformation.category).toBe('한식');
    });

    it('changes address', () => {
      const state = reducer({
        restaurantInformation: {
          address: '',
        },
      }, {
        type: 'changeInput',
        payload: {
          name: 'address',
          value: '서울시 강남구',
        },
      });

      expect(state.restaurantInformation.address).toBe('서울시 강남구');
    });
  });

  describe('addRestaurant', () => {
    it('appends restaurant into restaurant List', () => {
      const state = reducer({
        restaurantInformation: {
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
        },
        restaurants: [],
        nextId: 1,
      }, {
        type: 'addRestaurant',
      });

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurants[0].name).toBe('마녀주방');
    });

    it('clears restaurantInformation', () => {
      const state = reducer({
        restaurantInformation: {
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
        },
        restaurants: [],
        nextId: 1,
      }, {
        type: 'addRestaurant',
      });

      expect(state.restaurantInformation).toBe(initialState.restaurantInformation);
    });
  });
});
