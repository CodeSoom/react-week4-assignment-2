import reducer from './reducer';

import fixture from '../__fixtuers__/fixture';

import {
  updateInputText,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  describe('undefined action', () => {
    it('changes nothing', () => {
      const initalRestaurants = [];
      const initalInputs = [
        { name: 'name', placeholder: '이름', value: '' },
        { name: 'category', placeholder: '분류', value: '' },
        { name: 'address', placeholder: '주소', value: '' },
      ];

      const { restaurants, inputs } = reducer();

      expect(restaurants).toStrictEqual(initalRestaurants);
      expect(inputs).toStrictEqual(initalInputs);
    });
  });

  describe('updateInputText', () => {
    it('changes input texts', () => {
      const { restaurants, inputs } = fixture;
      const { placeholder } = inputs[0];
      const newInputText = '마녀주방';

      const state = reducer({
        restaurants,
        inputs,
      }, updateInputText(placeholder, newInputText));

      expect(state.inputs[0].value).toBe('마녀주방');
    });
  });

  describe('addRestaurant', () => {
    it('add restaurant to restaurants', () => {
      const { restaurants, inputs } = fixture;

      const state = reducer({
        restaurants,
        inputs,
      }, addRestaurant());

      expect(state.restaurants).toHaveLength(restaurants.length + 1);

      state.inputs.forEach((input) => {
        expect(input.value).toBe('');
      });
    });
  });
});
