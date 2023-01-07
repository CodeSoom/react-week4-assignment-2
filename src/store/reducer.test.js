import reducer from './reducer';
import { addNewRestaurant } from './actions';
import { Restaurant } from '../@types/restaurant';

describe('reducer', () => {
  describe('addNewRestaurant', () => {
    it('새로운 레스토랑 리스트를 반환한다.', () => {
      const initialState = {
        restaurants: [],
      };

      const newRestaurant = new Restaurant({
        name: '할매국밥',
        category: '한식',
        location: '부산',
      });

      const store = reducer(initialState, addNewRestaurant(newRestaurant));

      expect(store.restaurants).toHaveLength(1);
    });
  });
});
