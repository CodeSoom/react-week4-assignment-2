import reducer from './reducer';

import { addRestaurants, updateRestaurantInfo } from './actions';

describe('reducer', () => {
  describe('updateRestaurantInfo', () => {
    const previousState = {
      restaurantInfo: {
        name: '',
        address: '',
        category: '',
      },
    };
    it('레스토랑 이름을 저장한다', () => {
      const { restaurantInfo } = reducer(previousState, updateRestaurantInfo({ name: 'title', value: '알단테' }));
      expect(restaurantInfo.title).toBe('알단테');
    });

    it('레스토랑 카테고리를 저장한다', () => {
      const { restaurantInfo } = reducer(previousState, updateRestaurantInfo({ name: 'category', value: '양식' }));
      expect(restaurantInfo.category).toBe('양식');
    });

    it('레스토랑 주소를 저장한다', () => {
      const { restaurantInfo } = reducer(previousState, updateRestaurantInfo({ name: 'address', value: '광교' }));
      expect(restaurantInfo.address).toBe('광교');
    });
  });
});
