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

      it('새 restaurant 추가', () => {
        const state = reduceAddRestaurant({
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
        });

        expect(state.restaurants).toHaveLength(1);
      });
    });
  });
});
