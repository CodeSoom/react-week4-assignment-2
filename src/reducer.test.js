import reducer from './reducer';

describe('reducer', () => {
  describe('undefined action', () => {
    it('changes nothing', () => {
      const initalRestaurants = [];
      const initalInputs =  [
        { placeholder: '이름', value: '' },
        { placeholder: '분류', value: '' },
        { placeholder: '주소', value: '' },
      ];

      const {restaurants, inputs} = reducer();

      expect(restaurants).toStrictEqual(initalRestaurants);
      expect(inputs).toStrictEqual(initalInputs);
    });
  });
});
