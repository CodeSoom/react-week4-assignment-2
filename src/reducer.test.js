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
      const { restaurantInfo } = reducer(
        previousState,
        updateRestaurantInfo({ name: 'title', value: '알단테' })
      );
      expect(restaurantInfo.title).toBe('알단테');
    });

    it('레스토랑 카테고리를 저장한다', () => {
      const { restaurantInfo } = reducer(
        previousState,
        updateRestaurantInfo({ name: 'category', value: '양식' })
      );
      expect(restaurantInfo.category).toBe('양식');
    });

    it('레스토랑 주소를 저장한다', () => {
      const { restaurantInfo } = reducer(
        previousState,
        updateRestaurantInfo({ name: 'address', value: '광교' })
      );
      expect(restaurantInfo.address).toBe('광교');
    });
  });

  describe('addRestaurants', () => {
    function handleRestaurantInfo(restaurantInfo) {
      const initialState = {
        newId: 50,
        restaurants: [],
        restaurantInfo: {
          title: '',
          address: '',
          category: '',
        },
      };

      return reducer(
        {
          ...initialState,
          restaurantInfo: {
            ...restaurantInfo,
          },
        },
        addRestaurants()
      );
    }
    context('하나의 input이라도 비어있으면', () => {
      it(' 아무 일도 일어나지 않는다', () => {
        const { restaurants } = handleRestaurantInfo({
          title: '',
        });
        expect(restaurants.length).toBe(0);
      });
    });

    context('모든 input이 입력됐으면', () => {
      it('레스토랑 목록이 추가된다', () => {
        const { restaurants } = handleRestaurantInfo({
          title: '알단테',
          category: '양식',
          address: '광교',
        });
        expect(restaurants.length).toBe(1);
        expect(restaurants[0].title).toBe('알단테');
        expect(restaurants[0].address).toBe('광교');
        expect(restaurants[0].category).toBe('양식');
        expect(restaurants[0].id).toBe(50);
      });
    });
  });
});
