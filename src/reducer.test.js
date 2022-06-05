import reducer from './reducer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  context('존재하는 액션 타입이면', () => {
    describe('updateRestaurantName', () => {
      it('restaurantName을 변경한다', () => {
        const state = reducer(
          { restaurantName: '' },
          updateRestaurantName('마녀식당'),
        );

        expect(state.restaurantName).toBe('마녀식당');
      });
    });

    describe('updateRestaurantCategory', () => {
      it('restaurantCategory를 변경한다', () => {
        const state = reducer(
          { restaurantCategory: '' },
          updateRestaurantCategory('한식'),
        );

        expect(state.restaurantCategory).toBe('한식');
      });
    });

    describe('updateRestaurantAddress', () => {
      it('restaurantAddress를 변경한다', () => {
        const state = reducer(
          { restaurantAddress: '' },
          updateRestaurantAddress('서울시 강남구'),
        );

        expect(state.restaurantAddress).toBe('서울시 강남구');
      });
    });

    describe('addRestaurant', () => {
      function reduceAddRestaurant(
        restaurantName,
        restaurantCategory,
        restaurantAddress,
      ) {
        return reducer(
          {
            restaurantName,
            restaurantCategory,
            restaurantAddress,
            restaurantCatalog: [],
          },
          addRestaurant(),
        );
      }

      context('식당 이름, 분류, 주소가 모두 있다면', () => {
        it('restaurant category에 새 식당을 추가한다', () => {
          const state = reduceAddRestaurant(
            '마녀식당',
            '한식',
            '서울시 강남구',
          );

          expect(state.restaurantCatalog).toHaveLength(1);
          expect(state.restaurantCatalog[0].restaurantName).toBe('마녀식당');
          expect(state.restaurantCatalog[0].restaurantCategory).toBe('한식');
          expect(state.restaurantCatalog[0].restaurantAddress).toBe(
            '서울시 강남구',
          );
        });
      });

      context('식당 이름, 분류, 주소 중에 하나라도 없다면', () => {
        context('이름이 없을 때', () => {
          it('상태는 변화하지 않는다', () => {
            const state = reduceAddRestaurant('', '한식', '서울시 강남구');

            expect(state.restaurantCatalog).toHaveLength(0);
          });
        });

        context('분류가 없을 때', () => {
          it('상태는 변화하지 않는다', () => {
            const state = reduceAddRestaurant('마녀식당', '', '서울시 강남구');

            expect(state.restaurantCatalog).toHaveLength(0);
          });
        });
        context('주소가 없을 때', () => {
          const state = reduceAddRestaurant('마녀식당', '한식', '');

          expect(state.restaurantCatalog).toHaveLength(0);
        });
      });
    });
  });

  context('존재하지 않는 액션 타입이면', () => {
    const anonymousActionType = jest.fn(
      ({ restaurantName, restaurantCategory, restaurantAddress }) => ({
        type: 'anonymous',
        payload: {
          restaurantName,
          restaurantCategory,
          restaurantAddress,
        },
      }),
    );

    it('상태는 변화하지 않는다.', () => {
      const state = reducer(
        undefined,
        anonymousActionType({
          restaurantName: '마녀식당',
          restaurantCategory: '한식',
          restaurantAddress: '서울시 강남구',
        }),
      );

      expect(state.restaurantName).toBe('');
      expect(state.restaurantCategory).toBe('');
      expect(state.restaurantAddress).toBe('');
      expect(state.restaurantCatalog).toHaveLength(0);
    });
  });
});
