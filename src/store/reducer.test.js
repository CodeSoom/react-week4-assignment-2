import { updateInputValue, addRestaurant } from './actions';

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
});
