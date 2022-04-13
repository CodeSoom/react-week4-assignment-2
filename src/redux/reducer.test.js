import { addRestaurant } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  context('with action.type', () => {
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
    });
  });
});
