import { updateInputContent } from './actions';

import reducer, { initialState } from './reducer';

describe('reducer', () => {
  context('state가 없을 때,', () => {
    it('initailstate를 반환합니다.', () => {
      const state = reducer(
        undefined,
        {},
      );

      expect(state).toEqual(initialState);
    });
  });

  describe('updateInputValue', () => {
    context('type이 name 일 때', () => {
      it('name이 입력한 값으로 변경하여 반환합니다.', () => {
        const state = reducer(
          { name: '' },
          updateInputContent('name', '프론트'),
        );

        expect(state.name).toBe('프론트');
      });
    });

    context('type이 category 일 때', () => {
      it('category가 입력한 값으로 변경하여 반환합니다.', () => {
        const state = reducer(
          { category: '' },
          updateInputContent('category', '양식'),
        );

        expect(state.category).toBe('양식');
      });
    });

    context('type이 address 일 때', () => {
      it('address가 입력한 값으로 변경하여 반환합니다.', () => {
        const state = reducer(
          { address: '' },
          updateInputContent('address', '잠실'),
        );

        expect(state.address).toBe('잠실');
      });
    });
  });
});
