import reducer from './reducer';

import {
  updateInputText,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  const initalRestaurants = [];
  const initalInputInfos = [
    { name: 'name', placeholder: '이름', value: '' },
    { name: 'category', placeholder: '분류', value: '' },
    { name: 'address', placeholder: '주소', value: '' },
  ];

  describe('undefined action', () => {
    it('changes nothing', () => {
      const { restaurants, inputInfos } = reducer();

      expect(restaurants).toStrictEqual(initalRestaurants);
      expect(inputInfos).toStrictEqual(initalInputInfos);
    });
  });

  describe('updateInputText', () => {
    it('changes input texts', () => {
      const newInputText = '마녀주방';
      const { placeholder } = initalInputInfos[0];

      const { inputInfos } = reducer({
        restaurants: initalRestaurants,
        inputInfos: initalInputInfos,
      }, updateInputText(placeholder, newInputText));

      expect(inputInfos[0].value).toBe('마녀주방');
    });
  });

  describe('addRestaurant', () => {
    it('add restaurant to restaurants', () => {
      const previousInputInfos = [
        { name: 'name', placeholder: '이름', value: '시카고피자' },
        { name: 'category', placeholder: '분류', value: '양식' },
        { name: 'address', placeholder: '주소', value: '이태원동' },
      ];

      const { restaurants } = reducer({
        restaurants: initalRestaurants,
        inputInfos: previousInputInfos,
      }, addRestaurant());

      expect(restaurants).toHaveLength(initalRestaurants.length + 1);
    });
  });
});
