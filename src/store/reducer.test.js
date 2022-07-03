import reducer, { initialState } from './reducer';

describe('reducer', () => {
  context('state가 없으면', () => {
    it('initialState를 초기 상태로 가진다.', () => {
      const state = reducer();

      expect(state).toEqual(initialState);
    });
  });
});
