/* eslint-disable comma-dangle */
import {
  addRestaurant,
  deleteRestaurant, updateAddress, updateCategory,
  updateName
} from './actions';
import reducer from './reducer';

describe('reducer', () => {
  context('with action.type', () => {
    describe('updateName', () => {
      const state = reducer({
        state: {
          name: '',
        },
        action: updateName({ name: '마녀주방' }),
      });

      expect(state.name).toBe('마녀주방');
    });

    describe('updateCategory', () => {
      const state = reducer({
        state: {
          category: '',
        },
        action: updateCategory({ category: '한식' }),
      });

      expect(state.category).toBe('한식');
    });

    describe('updateAddress', () => {
      const state = reducer({
        state: {
          address: '',
        },
        action: updateAddress({ address: '서울시 강남구' }),
      });

      expect(state.address).toBe('서울시 강남구');
    });

    describe('addRestaurant', () => {
      function reduceAddRestaurant({ name, category, address }) {
        return reducer({
          state: {
            newId: 100,
            name,
            category,
            address,
            restaurants: [],
          },
          action: addRestaurant({ name, category, address }),
        });
      }

      context('with name || with category || with address', () => {
        it('새 restaurant 추가', () => {
          const state = reduceAddRestaurant({
            name: '마녀주방',
            category: '한식',
            address: '서울시 강남구',
          });

          expect(state.restaurants).toHaveLength(1);
          expect(state.restaurants[0].id).not.toBeNull();
          expect(state.restaurants[0].name).toBe('마녀주방');
          expect(state.restaurants[0].category).toBe('한식');
          expect(state.restaurants[0].address).toBe('서울시 강남구');
        });

        it("name is '' after addRestaurant", () => {
          const state = reduceAddRestaurant({
            name: '마녀주방',
            category: '한식',
            address: '서울시 강남구',
          });

          expect(state.name).toBe('');
        });

        it("category is '' after addRestaurant", () => {
          const state = reduceAddRestaurant({
            name: '마녀주방',
            category: '한식',
            address: '서울시 강남구',
          });

          expect(state.category).toBe('');
        });

        it("address is '' after addRestaurant", () => {
          const state = reduceAddRestaurant({
            name: '마녀주방',
            category: '한식',
            address: '서울시 강남구',
          });

          expect(state.address).toBe('');
        });
      });

      context('without name', () => {
        it('새 restaurant 추가', () => {
          const state = reduceAddRestaurant({
            name: '',
            category: '한식',
            address: '서울시 강남구',
          });

          expect(state.restaurants).toHaveLength(0);
        });
      });

      context('without category', () => {
        it('새 restaurant 추가', () => {
          const state = reduceAddRestaurant({
            name: '마녀주방',
            category: '',
            address: '서울시 강남구',
          });

          expect(state.restaurants).toHaveLength(0);
        });
      });

      context('without address', () => {
        it('새 restaurant 추가', () => {
          const state = reduceAddRestaurant({
            name: '마녀주방',
            category: '한식',
            address: '',
          });

          expect(state.restaurants).toHaveLength(0);
        });
      });
    });

    describe('deleteRestaurant', () => {
      function reduceDeleteRestaurant({ id }) {
        return reducer({
          state: {
            newId: 100,
            restaurants: [{
              id: 1,
              name: '마녀주방',
              category: '한식',
              address: '서울시 강남구',
            }, {
              id: 2,
              name: '마녀주방',
              category: '한식',
              address: '서울시 강남구',
            }],
          },
          action: deleteRestaurant({ id }),
        });
      }

      it('제대로된 ID로 restaurant 삭제', () => {
        const state = reduceDeleteRestaurant({ id: 1 });

        expect(state.restaurants).toHaveLength(1);
      });

      it('잘못된 ID로 restaurant 삭제', () => {
        const state = reduceDeleteRestaurant({ id: 4 });

        expect(state.restaurants).toHaveLength(2);
      });
    });
  });

  context('without action.type', () => {
    function otherFunction({ id }) {
      return {
        type: 'otherFunction',
        payload: {
          id,
        },
      };
    }

    it('존재하지 않는 reducer실행', () => {
      const state = reducer({
        state: undefined,
        action: otherFunction({ id: 1 }),
      });

      expect(state.restaurants).toHaveLength(0);
    });
  });
});
