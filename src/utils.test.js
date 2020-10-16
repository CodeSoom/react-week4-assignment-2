import utils from './utils';

describe('utils', () => {
  const prevObj = {
    value1: 'wel  ',
    value2: '    www    ',
  };

  describe('trimValues', () => {
    it('returns new object with trimmed value', () => {
      expect(utils.trimValues(prevObj)).toEqual({
        value1: 'wel',
        value2: 'www',
      });
    });
  });

  describe('mapValues', () => {
    context('with empty string as trim function', () => {
      const mapFn = () => '';

      it('returns new object with values of empty string', () => {
        expect(utils.mapValues(prevObj, mapFn)).toEqual({
          value1: '',
          value2: '',
        });
      });
    });
  });
});
