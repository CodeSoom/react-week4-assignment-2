import reducer from './reducer';

import {
  updateTitle,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  const previousState = {
    newId: 1,
    title: '',
    restaurants: [],
  };

  context('상태가 없으면', () => {
    it('이전 상태 그대로 반환한다.', () => {
      const newState = reducer(undefined);
      expect(newState).toEqual(previousState);
    });
  });

  context('이름을 입력하면', () => {
    it('이름이 바뀐 상태를 받는다.', () => {
      const newState = reducer(
        previousState,
        updateTitle('마녀주방'),
      );

      expect(newState.title).toBe('마녀주방');
    });
  });

  context('레스토랑을 추가하면', () => {
    it('추가된 상태를 받는다.', () => {
      const newState = reducer({
        title: '시카고 피자',
        restaurants: [],
      }, addRestaurant());

      expect(newState.restaurants).toHaveLength(1);
    });
  });
});
