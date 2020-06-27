import reducer from './reducer';
import { registerRestaurant, updateInput } from './actions';

const previousState = {
  id: 2,
  input: {
    name: '시카고피자',
    category: '양식',
    address: '이태원동',
  },
  restaurants: [{
    id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
  }],
};

describe('reducer', () => {
  describe('registerRestaurant', () => {
    const reduceRegisterRestaurant = () => {
      const action = registerRestaurant();
      return reducer(previousState, action);
    };

    context('with restaurant information', () => {
      it('register a restaurant to the restaurants of state', () => {
        // when
        const state = reduceRegisterRestaurant();
        // then
        const newRestaurant = state.restaurants[state.restaurants.length - 1];
        expect(state.restaurants).toHaveLength(previousState.restaurants.length + 1);
        expect(newRestaurant.id).toBe(2);
        expect(newRestaurant.name).toBe(previousState.input.name);
        expect(newRestaurant.category).toBe(previousState.input.category);
        expect(newRestaurant.address).toBe(previousState.input.address);
      });

      it('increases new id by one', () => {
        // when
        const state = reduceRegisterRestaurant();
        // then
        expect(state.id).toBe(previousState.id + 1);
      });

      it('clears input values', () => {
        // when
        const state = reduceRegisterRestaurant();
        // then
        expect(state.input.name.value).toBe('');
        expect(state.input.category.value).toBe('');
        expect(state.input.address.value).toBe('');
      });
    });
  });

  describe('updateInput', () => {
    const reduceUpdateInput = (inputValue) => {
      const action = updateInput(inputValue);
      return reducer(previousState, action);
    };

    context('with new input values', () => {
      it('update the name input value', () => {
        // given
        const inputValue = {
          name: 'name', value: '키와미',
        };
        // when
        const state = reduceUpdateInput(inputValue);
        // then
        expect(state.input.name).toBe(inputValue.value);
      });

      it('update the category input value', () => {
        // given
        const inputValue = {
          name: 'category', value: '일식',
        };
        // when
        const state = reduceUpdateInput(inputValue);
        // then
        expect(state.input.name).toBe(inputValue.value);
      });

      it('update the address input value', () => {
        // given
        const inputValue = {
          name: 'address', value: '분당구 정자동',
        };
        // when
        const state = reduceUpdateInput(inputValue);
        // then
        expect(state.input.name).toBe(inputValue.value);
      });

      it('does not change the id of the state', () => {
        // when
        const state = reduceUpdateInput({ name: 'address', value: '분당구 정자동' });
        // then
        expect(state.id).toBe(previousState.id);
      });

      it('does not change the restaurants of the state', () => {
        // when
        const state = reduceUpdateInput({ name: 'address', value: '분당구 정자동' });
        // then
        expect(state.restaurants).toEqual(previousState.restaurants);
      });
    });
  });
});
