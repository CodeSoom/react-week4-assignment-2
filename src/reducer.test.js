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
        updateRestaurantInfo({ name: 'name', value: '알단테' }),
      );
      expect(restaurantInfo.name).toBe('알단테');
    });

    it('레스토랑 카테고리를 저장한다', () => {
      const { restaurantInfo } = reducer(
        previousState,
        updateRestaurantInfo({ name: 'category', value: '양식' }),
      );
      expect(restaurantInfo.category).toBe('양식');
    });

    it('레스토랑 주소를 저장한다', () => {
      const { restaurantInfo } = reducer(
        previousState,
        updateRestaurantInfo({ name: 'address', value: '광교' }),
      );
      expect(restaurantInfo.address).toBe('광교');
    });
  });

  describe('addRestaurants', () => {
    function handleAddRestaurant(restaurantInfo) {
      const initialState = {
        newId: 50,
        restaurants: [],
        restaurantInfo: {
          name: '',
          address: '',
          category: '',
        },
      };

      return reducer(
        {
          ...initialState,
          restaurantInfo: {
            ...initialState.restaurantInfo,
            ...restaurantInfo,
          },
        },
        addRestaurants(),
      );
    }
    context('입력값이 하나라도 없으면', () => {
      it(' 아무 일도 일어나지 않는다', () => {
        const { restaurants } = handleAddRestaurant({
          name: '',
          address: '광교',
          category: '양식',
        });

        expect(restaurants.length).toBe(0);
      });
    });

    context('모든 입력값이 있으면', () => {
      it('레스토랑 목록이 추가된다', () => {
        const { restaurants } = handleAddRestaurant({
          name: '알단테',
          category: '양식',
          address: '광교',
        });
        expect(restaurants.length).toBe(1);
        expect(restaurants[0].name).toBe('알단테');
        expect(restaurants[0].address).toBe('광교');
        expect(restaurants[0].category).toBe('양식');
        expect(restaurants[0].id).toBe(50);
      });

      it('추가된 후 모든 input이 초기화된다', () => {
        const {
          restaurantInfo: { name, address, category },
        } = handleAddRestaurant({
          name: '알단테',
          category: '양식',
          address: '광교',
        });
        expect(name).toBe('');
        expect(address).toBe('');
        expect(category).toBe('');
      });
    });
  });

  describe('action이 없을 경우', () => {
    const initialState = {
      newId: 50,
      restaurants: [],
      restaurantInfo: {
        name: '',
        address: '',
        category: '',
      },
    };
    context('state가 존재함', () => {
      it('state를 반환한다', () => {
        const state = reducer({ newId: 1 }, { type: 'hi' });
        expect(state.newId).toBe(1);
      });
    });

    context('state가 없음', () => {
      it('초기 state를 반환한다', () => {
        const state = reducer(undefined, { type: 'hi' });
        expect(state).toEqual(initialState);
      });
    });
  });
});
