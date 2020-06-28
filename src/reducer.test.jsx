import reducer from './reducer';

describe('reducer', () => {
  context('상태가 없으면', () => {
    it('이전 상태 그대로 반환한다.', () => {
      const previousState = {
        restaurants: [],
      };

      const newState = reducer(undefined);
      expect(newState).toEqual(previousState);
    });
  });
});

