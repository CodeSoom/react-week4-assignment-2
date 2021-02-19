import reducer from './reducer';

describe('reducer', () => {
  const previousState = {
    id: 0,
    name: '',
    category: '',
    address: '',
    restaurants: [],
  };

  context('without registered action type', () => {
    it('does nothing', () => {
      const state = reducer(previousState, {
        type: undefined,
      });

      expect(state).toEqual(previousState);
    });
  });

  context('with registered action type', () => {
    describe('updateRestaurantInformation', () => {
      context('without previous state', () => {
        it('updates restaurant name using initial state', () => {
          const state = reducer(undefined, {
            type: 'updateRestaurantName',
            payload: {
              name: '마녀주방',
            },
          });

          expect(state.name).toBe('마녀주방');
        });
      });

      context('with previous state', () => {
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
  });
});
