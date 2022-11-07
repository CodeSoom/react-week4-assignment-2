import reducer from './reducer';

import { updateRestaurant, addRestaurant } from './actions';

describe('reducer', () => {
  describe('updateRestaurant', () => {
    it('입력한 레스토랑 정보를 업데이트 해준다', () => {
      const state = reducer(
        { name: '' },
        updateRestaurant('name', '시카고 피자'),
      );

      expect(state.name).toBe('시카고 피자');
    });
  });

  describe('addRestaurant', () => {
    function reduceAddRestaurant(name, address, category) {
      return reducer(
        {
          name,
          category,
          address,
          restaurantList: [],
        },
        addRestaurant(name, category, address),
      );
    }
    context('name, category, address 모두 있을 때', () => {
      it('입력한 레스토랑을 추가해준다', () => {
        const state = reduceAddRestaurant('김밥지옥', '강남구', '분식');

        expect(state.restaurantList).toHaveLength(1);
        expect(state.restaurantList[0].id).not.toBeUndefined();
        expect(state.restaurantList[0].name).toBe('김밥지옥');
        expect(state.restaurantList[0].category).toBe('분식');
        expect(state.restaurantList[0].address).toBe('강남구');
      });

      it('입력창을 초기화해준다', () => {
        const state = reduceAddRestaurant();

        expect(state.name).toBe();
        expect(state.category).toBe();
        expect(state.address).toBe();
      });
    });

    context('restaurantName이 없을 때', () => {
      it('아무런 동작을 하지 않는다', () => {
        const state = reduceAddRestaurant('', '강남구', '분식');

        expect(state.restaurantList).toHaveLength(0);
      });
    });

    context('category이 없을 때', () => {
      it('아무런 동작을 하지 않는다', () => {
        const state = reduceAddRestaurant('김밥지옥', '강남구', '');

        expect(state.restaurantList).toHaveLength(0);
      });
    });

    context('address이 없을 때', () => {
      it('아무런 동작을 하지 않는다', () => {
        const state = reduceAddRestaurant('김밥지옥', '', '분식');

        expect(state.restaurantList).toHaveLength(0);
      });
    });
  });

  describe('아무런 값이 없을 때', () => {
    it('아무런 동작을 하지 않는다', () => {
      const state = reducer();

      expect(state.name).toBe('');
      expect(state.category).toBe('');
      expect(state.address).toBe('');
      expect(state.restaurantList).toHaveLength(0);
    });
  });
});
