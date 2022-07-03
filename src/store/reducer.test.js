import reducer from './reducer';

describe('reducer', () => {
  const initialState = {
    name: '',
    category: '',
    address: '',
    restaurants: [],
  };

  context('state가 없으면', () => {
    it('initialState를 초기 상태로 가진다.', () => {
      const state = reducer();

      expect(state).toEqual(initialState);
    });
  });
});
