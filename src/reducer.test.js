import reducer from './reducer';

import {
  updateName,
  updateCategory,
  updateAddress,
  addInformation,
} from './actions';

describe('reducer', () => {
  describe('updateName', () => {
    it('이름이 변경된다.', () => {
      const previousState = {
        name: '',
      };

      const state = reducer(previousState, updateName('콩나물해장국'));

      expect(state.name).toBe('콩나물해장국');
    });
  });

  describe('updateCategory', () => {
    it('분류가 변경된다.', () => {
      const previousState = {
        category: '',
      };

      const state = reducer(previousState, updateCategory('한식'));

      expect(state.category).toBe('한식');
    });
  });

  describe('updateAddress', () => {
    it('주소가 변경된다.', () => {
      const previousState = {
        address: '',
      };

      const state = reducer(previousState, updateAddress('강릉'));

      expect(state.address).toBe('강릉');
    });
  });

  describe('addInformation', () => {
    context('이름, 분류, 주소등 모든 정보가 있을 경우', () => {
      const previousState = {
        newId: 100,
        name: '돈스파이크',
        category: '양식',
        address: '인천',
        informations: [],
      };
      it('레스토랑 정보가 추가된다', () => {
        const state = reducer(previousState, addInformation());

        expect(state.informations).toHaveLength(1);
      });

      it('레스토랑 정보가 추가된 후 입력정보가 초기화된다.', () => {
        const state = reducer(previousState, addInformation());

        expect(state.name).toBe('');
        expect(state.category).toBe('');
        expect(state.address).toBe('');
      });
    });

    context('이름, 분류, 주소 중 정보가 하나라도 없을 경우', () => {
      it('레스토랑 정보가 추가되지 않는다.', () => {
        const previousState = {
          newId: 100,
          name: '',
          category: '양식',
          address: '인천',
          informations: [],
        };

        const state = reducer(previousState, addInformation());

        expect(state.informations).toHaveLength(0);
      });
    });
  });
});
