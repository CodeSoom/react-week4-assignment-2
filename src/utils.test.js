import utils from './utils';

describe('utils', () => {
  const prevObj = {
    value1: 'wel  ',
    value2: '    www    ',
  };

  describe('mapValues', () => {
    context('with empty string as mapping function', () => {
      const mapFn = () => '';

      it('returns new object with values of empty string', () => {
        expect(utils.mapValues(prevObj, mapFn)).toEqual({
          value1: '',
          value2: '',
        });
      });
    });

    context('with trim as mapping function', () => {
      const mapFn = (value) => value.trim();

      it('returns new object with trimmed values', () => {
        expect(utils.mapValues(prevObj, mapFn)).toEqual({
          value1: 'wel',
          value2: 'www',
        });
      });
    });
  });
});
