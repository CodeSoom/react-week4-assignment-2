import reducer from './reducer';
import { addRestaurant } from './actions';

describe('reducer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('addRestaurant', () => {
    const state = reducer(state, addRestaurant({
      restaurantsName: '짬홍',
      category: '중식',
      address: '구룡포읍',
    }));

    expect(state.restaurantsName).toBe('짬홍');
  });
});
