import reducer from './reducer';

import { updateInputText, addRegister } from './actions';

describe('reducer', () => {
  describe('initialState', () => {
    context('with action', () => {
      it('returns initialState', () => {
        const state = reducer(undefined, updateInputText);

        expect(state).toEqual({
          newId: 0,
          name: '',
          category: '',
          address: '',
          registers: [],
        });
      });
    });

    it("has state but doesn't have action", () => {
      const state = reducer({
        newId: 0,
        name: '밥집',
        category: '한식',
        address: '서울',
        registers: [],
      });

      expect(state).toEqual({
        newId: 0,
        name: '밥집',
        category: '한식',
        address: '서울',
        registers: [],
      });
    });

    context('without action', () => {
      it('returns initialState', () => {
        const state = reducer();

        expect(state).toEqual({
          newId: 0,
          name: '',
          category: '',
          address: '',
          registers: [],
        });
      });
    });
  });

  describe('updateInputText', () => {
    it('returns new state with new input text', () => {
      const state = reducer({ name: '' }, updateInputText({ name: 'name', value: '밥집' }));
      expect(state.name).toBe('밥집');
    });
  });

  describe('addRegister', () => {
    function reduceAddRegister(name, category, address) {
      return reducer({
        newId: 0,
        name,
        category,
        address,
        registers: [],
      }, addRegister());
    }

    it('appends a new register into registers', () => {
      const state = reduceAddRegister('소년식당', '소식', '내마음속');

      expect(state.registers).toHaveLength(1);
      expect(state.registers[0]).not.toBeUndefined();
    });

    it('clears all input', () => {
      const state = reduceAddRegister('소년식당', '소식', '내마음속');

      expect(state.name).toBe('');
      expect(state.category).toBe('');
      expect(state.address).toBe('');
    });
  });
});
