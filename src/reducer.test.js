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
        inputs: {
          name: '',
        },
      }, {
        type: 'changeInput',
        payload: {
          name: 'name',
          value: '마녀주방',
        },
      });

      expect(state.inputs.name).toBe('마녀주방');
    });

    it('changes category', () => {
      const state = reducer({
        inputs: {
          category: '',
        },
      }, {
        type: 'changeInput',
        payload: {
          name: 'category',
          value: '한식',
        },
      });

      expect(state.inputs.category).toBe('한식');
    });

    it('changes address', () => {
      const state = reducer({
        inputs: {
          address: '',
        },
      }, {
        type: 'changeInput',
        payload: {
          name: 'address',
          value: '서울시 강남구',
        },
      });

      expect(state.inputs.address).toBe('서울시 강남구');
    });
  });

  describe('addRestaurant', () => {
    it('appends restaurant into restaurant List', () => {
      const state = reducer({
        inputs: {
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

    it('clears inputs', () => {
      const state = reducer({
        inputs: {
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
        },
        restaurants: [],
        nextId: 1,
      }, {
        type: 'addRestaurant',
      });

      expect(state.inputs).toBe(initialState.inputs);
    });
  });
});
