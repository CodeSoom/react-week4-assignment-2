import reducer from './reducer';

import {
  setRestaurants,
} from './actions';

describe('reducer', () => {
  describe('updateTitle', () => {
    it('returns new state with new restaurant', () => {
      const state = reducer({
        shopName: '',
        shopType: '',
        shopAddress: '',
        restaurants: [
          {
            id: 1, name: '마녀주방', type: '한식', address: '서울시 강남구',
          },
        ],
      }, setRestaurants());

      expect(state.restaurants).not.toBeNull();
    });
  });
});
