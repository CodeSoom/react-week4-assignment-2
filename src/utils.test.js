import utils from './utils';

describe('utils', () => {
  describe('trimValues', () => {
    it('returns new object with trimmed value', () => {
      const prevObj = {
        value1: 'wel  ',
        value2: '    www    ',
      };

      expect(utils.trimValues(prevObj)).toEqual({
        value1: 'wel',
        value2: 'www',
      });
    });
  });
});
