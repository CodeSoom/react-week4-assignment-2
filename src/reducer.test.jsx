import reducer from './reducer';

describe('reducer', () => {
  describe('updateRestaurantInformation', () => {
    it('updates restaurant name', () => {
      const previousState = {
        id: 0,
        name: '',
        category: '',
        address: '',
        restaurants: [],
      };
      const state = reducer(previousState, {
        type: 'updateRestaurantName',
        payload: {
          name: '마녀주방',
        },
      });

      expect(state.name).toBe('마녀주방');
    });
  });

  it('updates restaurant category', () => {
    const previousState = {
      id: 0,
      name: '',
      category: '',
      address: '',
      restaurants: [],
    };
    const state = reducer(previousState, {
      type: 'updateRestaurantCategory',
      payload: {
        category: '한식',
      },
    });

    expect(state.category).toBe('한식');
  });
});
