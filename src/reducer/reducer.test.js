import { setRestaurants } from '../actions/actions';
import reducer from './reducer';

describe('reducer', () => {
  const restaurants = [
    {
      id: 1,
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
    {
      id: 2,
      name: '시카고피자',
      category: '양식',
      address: '이태원동',
    },
  ];

  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const state = reducer({
        restaurants: [],
      }, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });
});
