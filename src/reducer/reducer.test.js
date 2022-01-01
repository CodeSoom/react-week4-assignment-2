import reducer from './reducer';
import {addRestaurant, updateAddress, updateCategory, updateName} from './action/actions';

describe('reducer', () => {
  context('입력된 state가 없으면', () => {
    it(' 기본값이 반환된다', () => {
      const state = reducer(undefined, {});

      expect(state.name).toBe('');
      expect(state.category).toBe('');
      expect(state.address).toBe('');
    });
  });

  context('지정되지 않은 type이 넘어가면', () => {
    it('state 그대로 반환된다', () => {
      const expectState = { name: 'test' };

      const state = reducer(expectState, {});

      expect(state.name).toBe(expectState.name);
    });
  });

  describe('updateName', () => {
    it('새로운 이름으로 변경된다', () => {
      const expectName = 'New Name';

      const state = reducer({}, updateName(expectName));

      expect(state.name).toBe(expectName);
    });
  });

  describe('updateCategory', () => {
    it('새로운 분류로 변경된다', () => {
      const expectCategory = 'New Category';

      const state = reducer({}, updateCategory(expectCategory));

      expect(state.category).toBe(expectCategory);
    });
  });

  describe('updateAddress', () => {
    it('새로운 주소로 변경된다', () => {
      const expectAddress = 'New Address';

      const state = reducer({}, updateAddress(expectAddress));

      expect(state.address).toBe(expectAddress);
    });
  });

  describe('add', () => {
    it('새 레스토랑이 등록된다', () => {
      const expectName = 'New Name';
      const expectCategory = 'New Category';
      const expectAddress = 'New Address';

      const { restaurants } = reducer({
        name: expectName,
        category: expectCategory,
        address: expectAddress,
        restaurants: [],
      }, addRestaurant());

      expect(restaurants).toHaveLength(1);
      expect(restaurants[0].name).toBe(expectName);
      expect(restaurants[0].category).toBe(expectCategory);
      expect(restaurants[0].address).toBe(expectAddress);
    });
  });
});
