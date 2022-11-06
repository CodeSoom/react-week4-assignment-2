import reducer from './reducer';

import { changeText, addRestaurant } from './actions';

describe('reducer', () => {
  describe('changeText', () => {
    it('레스토랑 정보를 입력한다.', () => {
      const state = reducer({
        name: '',
      }, changeText('name', '김밥천국'));

      expect(state.name).toBe('김밥천국');
    });
  });

  describe('addRestaurant', () => {
    function reducerAddRestaurant({
      name,
      category,
      address,
      restaurantLists,
    }) {
      return reducer({
        id: 1,
        name,
        category,
        address,
        restaurantLists: [],
      }, addRestaurant(restaurantLists));
    }

    context('입력란에 레스토랑 정보가 모두 있을 경우', () => {
      it('레스토랑 정보를 추가하여 목록을 만든다.', () => {
        const state = reducerAddRestaurant({
          name: '양키통닭',
          category: '한식',
          address: '서울시 문래동',
          restaurantLists: [],
        });

        expect(state.restaurantLists).toHaveLength(1);
      });

      it('레스토랑 정보를 빈 값으로 만든다.', () => {
        const state = reducerAddRestaurant({
          name: '양키통닭',
          category: '한식',
          address: '서울시 문래동',
          restaurantLists: [],
        });

        expect(state.name).toBe('');
        expect(state.category).toBe('');
        expect(state.address).toBe('');
      });
    });

    context('입력란에 레스토랑 이름 정보가 없을 경우', () => {
      it('레스토랑 목록에 추가되지 않고, 아무 동작하지 않는다.', () => {
        const state = reducerAddRestaurant({
          name: '',
          category: '한식',
          address: '서울시 문래동',
          restaurantLists: [],
        });

        expect(state.name).toBe('');
        expect(state.restaurantLists).toHaveLength(0);
      });
    });

    context('입력란에 레스토랑 분류 정보가 없을 경우', () => {
      it('레스토랑 목록에 추가되지 않고, 아무 동작하지 않는다.', () => {
        const state = reducerAddRestaurant({
          name: '양키통닭',
          category: '',
          address: '서울시 문래동',
          restaurantLists: [],
        });

        expect(state.category).toBe('');
        expect(state.restaurantLists).toHaveLength(0);
      });
    });

    context('입력란에 레스토랑 주소 정보가 없을 경우', () => {
      it('레스토랑 목록에 추가되지 않고, 아무 동작하지 않는다.', () => {
        const state = reducerAddRestaurant({
          name: '양키통닭',
          category: '한식',
          address: '',
          restaurantLists: [],
        });

        expect(state.address).toBe('');
        expect(state.restaurantLists).toHaveLength(0);
      });
    });
  });

  describe('어떠한 동작을 하지 않는 경우', () => {
    it('아무 일도 일어나지 않는다.', () => {
      const state = reducer();

      expect(state.name).toBe('');
      expect(state.category).toBe('');
      expect(state.address).toBe('');
      expect(state.restaurantLists).toHaveLength(0);
    });
  });
});
