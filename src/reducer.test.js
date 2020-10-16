import reducer from './reducer';

import fixture from '../__fixtuers__/fixture';

import {
  updateInputText,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  describe('undefined action', () => {
    const initalRestaurants = [];
    const initalInputInfos = [
      { name: 'name', placeholder: '이름', value: '' },
      { name: 'category', placeholder: '분류', value: '' },
      { name: 'address', placeholder: '주소', value: '' },
    ];

    it('changes nothing', () => {
      const { restaurants, inputInfos } = reducer();

      expect(restaurants).toStrictEqual(initalRestaurants);
      expect(inputInfos).toStrictEqual(initalInputInfos);
    });
  });

  describe('updateInputText', () => {
    it('changes input texts', () => {
      const { restaurants, inputInfos } = fixture;
      const { placeholder } = inputInfos[0];
      const newInputText = '마녀주방';

      const state = reducer({
        restaurants,
        inputInfos,
      }, updateInputText(placeholder, newInputText));

      expect(state.inputInfos[0].value).toBe('마녀주방');
    });
  });

  describe('addRestaurant', () => {
    it('add restaurant to restaurants', () => {
      const { restaurants, inputInfos } = fixture;

      const state = reducer({
        restaurants,
        inputInfos,
      }, addRestaurant());

      expect(state.restaurants).toHaveLength(restaurants.length + 1);
    });
  });
});
