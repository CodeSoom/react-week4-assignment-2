import reducer from './reducer';

describe('reducer', () => {
  describe('updateName', () => {
    it('이름이 변경된다.', () => {
      const previousState = {
        name: '',
      };

      const action = {
        type: 'updateName',
        payload: {
          name: '콩나물해장국',
        },
      };

      const state = reducer(previousState, action);

      expect(state.name).toBe('콩나물해장국');
    });
  });

  describe('updateCategory', () => {
    it('분류가 변경된다.', () => {
      const previousState = {
        category: '',
      };

      const action = {
        type: 'updateCategory',
        payload: {
          category: '한식',
        },
      };

      const state = reducer(previousState, action);

      expect(state.category).toBe('한식');
    });
  });

  describe('updateAddress', () => {
    it('주소가 변경된다.', () => {
      const previousState = {
        address: '',
      };

      const action = {
        type: 'updateAddress',
        payload: {
          address: '강릉',
        },
      };

      const state = reducer(previousState, action);

      expect(state.address).toBe('강릉');
    });
  });

  describe('addInformation', () => {
    it('레스토랑 정보가 추가된다', () => {
      const previousState = {
        newId: 100,
        name: '돈스파이크',
        category: '양식',
        address: '인천',
        informations: [],
      };

      const action = {
        type: 'addInformation',
      };

      const state = reducer(previousState, action);

      expect(state.informations).toHaveLength(1);
    });
  });
});
