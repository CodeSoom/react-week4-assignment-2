import reducer from './reducer';

describe('reducer', () => {
  describe('updateRestaurantInformation', () => {
    const previousState = {
      id: 0,
      name: '',
      category: '',
      address: '',
      restaurants: [],
    };
    it('updates restaurant name', () => {
      const state = reducer(previousState, {
        type: 'updateRestaurantName',
        payload: {
          name: '마녀주방',
        },
      });

      expect(state.name).toBe('마녀주방');
    });

    it('updates restaurant category', () => {
      const state = reducer(previousState, {
        type: 'updateRestaurantCategory',
        payload: {
          category: '한식',
        },
      });

      expect(state.category).toBe('한식');
    });

    it('updates restaurant address', () => {
      const state = reducer(previousState, {
        type: 'updateRestaurantAddress',
        payload: {
          address: '서울시 강남구',
        },
      });

      expect(state.address).toBe('서울시 강남구');
    });
  });
});
