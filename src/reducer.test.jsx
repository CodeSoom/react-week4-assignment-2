import reducer from './reducer';

import {
  updateRestaurant,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  const previousState = {
    newId: 1,
    name: '',
    category: '',
    address: '',
    restaurants: [],
  };

  function getTarget(name, value) {
    return {
      name, value,
    };
  }

  context('상태가 없으면', () => {
    it('이전 상태 그대로 반환한다.', () => {
      const newState = reducer(undefined);
      expect(newState).toEqual(previousState);
    });
  });

  context('updateRestaurant', () => {
    it('이름이 바뀐 상태를 받는다.', () => {
      const target = getTarget('name', '마녀주방');

      const newState = reducer(
        previousState,
        updateRestaurant(target),
      );

      expect(newState.name).toBe('마녀주방');
    });
    it('분류가 바뀐 상태를 받는다.', () => {
      const target = getTarget('category', '한식');

      const newState = reducer(
        previousState,
        updateRestaurant(target),
      );

      expect(newState.category).toBe('한식');
    });
    it('주소가 바뀐 상태를 받는다.', () => {
      const target = getTarget('address', '서울시 강남구');

      const newState = reducer(
        previousState,
        updateRestaurant(target),
      );

      expect(newState.address).toBe('서울시 강남구');
    });
  });

  context('레스토랑을 추가하면', () => {
    it('추가된 상태를 받는다.', () => {
      const newState = reducer({
        newId: 1,
        name: '시카고 피자',
        category: '양식',
        address: '인천 학익동',
        restaurants: [],
      }, addRestaurant());

      expect(newState.newId).toBe(2);
      expect(newState.restaurants).toHaveLength(1);

      expect(newState.name).toBe('');
      expect(newState.category).toBe('');
      expect(newState.address).toBe('');
    });
  });
});
