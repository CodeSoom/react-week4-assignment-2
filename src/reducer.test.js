import { addRestaurants } from './actions';

import reducer from './reducer';

describe('reducer', () => {
  it('이름을 입력하면 state.name이 입력된 이름으로 업데이트된다.', () => {
    const preveState = {
      name: '',
    };

    const state = reducer(preveState, {
      type: 'inputUpdate',
      payload: {
        placeholder: '이름',
        input: '마녀 주방',
      },
    });

    expect(state.name).toBe('마녀 주방');
  });

  it('분류를 입력하면 state.category가 입력된 분류로 업데이트된다.', () => {
    const preveState = {
      category: '',
    };

    const state = reducer(preveState, {
      type: 'inputUpdate',
      payload: {
        placeholder: '분류',
        input: '한식',
      },
    });

    expect(state.category).toBe('한식');
  });

  it('주소를 입력하면 state.address가 입력된 주소로 업데이트된다.', () => {
    const preveState = {
      address: '',
    };

    const state = reducer(preveState, {
      type: 'inputUpdate',
      payload: {
        placeholder: '주소',
        input: '서울시 강남구',
      },
    });

    expect(state.address).toBe('서울시 강남구');
  });

  context('입력이 안된 칸이 없을 때', () => {
    const preveState = {
      id: 100,
      name: '마녀 주방',
      category: '한식',
      address: '서울시 강남구',
      restaurantsList: [],
    };

    it('등록 버튼을 누르면 레스토랑 정보가 추가되고 입력칸들은 비워진다.', () => {
      const state = reducer(preveState, addRestaurants());

      expect(state.restaurantsList).toBe(['마녀 주방 | 한식 | 서울시 강남구']);
      expect(state.name).toBe('');
      expect(state.category).toBe('');
      expect(state.restaurantsList).toBe('');
    });
  });

  context('입력이 안된 칸이 있을 때', () => {
    const preveState = {
      id: 100,
      name: '',
      category: '한식',
      address: '서울시 강남구',
      restaurantsList: [],
    };

    it('등록버튼을 눌러도 레스토랑 정보가 추가되지 않는다.', () => {
      const state = reducer(preveState, addRestaurants());

      expect(state.restaurantsList).toBe([]);
    });
  });
});
