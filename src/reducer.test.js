import { updateInput, addRestaurants } from './actions';

import reducer, { initialState } from './reducer';

describe('reducer', () => {
  it('이름을 입력하면 state.restaurant.name이 입력된 이름으로 업데이트된다.', () => {
    const preveState = {
      restaurant: {
        name: '',
      },
    };

    const state = reducer(preveState, updateInput('name', '마녀 주방'));

    expect(state.restaurant.name).toBe('마녀 주방');
  });

  it('분류를 입력하면 state.restaurant.category가 입력된 분류로 업데이트된다.', () => {
    const preveState = {
      restaurant: {
        category: '',
      },
    };

    const state = reducer(preveState, updateInput('category', '한식'));

    expect(state.restaurant.category).toBe('한식');
  });

  it('주소를 입력하면 state.restaurant.address가 입력된 주소로 업데이트된다.', () => {
    const preveState = {
      restaurant: {
        address: '',
      },
    };

    const state = reducer(preveState, updateInput('address', '서울시 강남구'));

    expect(state.restaurant.address).toBe('서울시 강남구');
  });

  context('입력이 안된 칸이 없을 때', () => {
    const preveState = {
      id: 100,
      restaurant: {
        name: '마녀 주방',
        category: '한식',
        address: '서울시 강남구',
      },
      restaurantsList: [],
    };

    it('등록 버튼을 누르면 레스토랑 정보가 추가되고 입력칸들은 비워진다.', () => {
      const state = reducer(preveState, addRestaurants());

      expect(state.restaurantsList).toHaveLength(1);
      expect(state.restaurant.name).toBe('');
      expect(state.restaurant.category).toBe('');
      expect(state.restaurant.address).toBe('');
    });
  });

  context('입력이 안된 칸이 있을 때', () => {
    const preveState = {
      id: 100,
      restaurant: {
        name: '',
        category: '한식',
        address: '서울시 강남구',
      },
      restaurantsList: [],
    };

    it('등록버튼을 눌러도 레스토랑 정보가 추가되지 않는다.', () => {
      const state = reducer(preveState, addRestaurants());

      expect(state.restaurantsList).toHaveLength(0);
    });
  });

  it('인자가 없으면 기본값으로 state를 만든다.', () => {
    const state = reducer();

    expect(state).toBe(initialState);
  });
});
