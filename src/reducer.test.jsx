import reducer from './reducer';

import {
  updateTitle,
} from './actions';

describe('reducer', () => {
  context('상태가 없으면', () => {
    it('이전 상태 그대로 반환한다.', () => {
      const previousState = {
        title: '',
        restaurants: [],
      };

      const newState = reducer(undefined);
      expect(newState).toEqual(previousState);
    });
  });

  context('이름을 입력하면', () => {
    it('이름이 바뀐 상태를 받는다.', () => {
      const previousState = {
        title: '',
        restaurants: [],
      };
      const newState = reducer(previousState, updateTitle('마녀주방'));

      expect(newState.title).toBe('마녀주방');
    });
  });
});
