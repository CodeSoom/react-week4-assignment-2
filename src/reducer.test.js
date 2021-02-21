import reducer from './reducer';

import updateReservations, { addReservations } from './actions';

describe('reducer', () => {
  const prevState = {
    id: 0,
    name: '',
    category: '',
    address: '',
    reservations: [],
  };

  it('식당 이름을 나타냅니다.', () => {
    const state = reducer(prevState, updateReservations('name', '마녀주방'));

    expect(state.name).toBe(/마녀주방/);
  });

  it('식당 이름을 업데이트합니다.', () => {
    const state = reducer(prevState, updateReservations('name', '마녀주방'));

    expect(state.name).toBe('마녀주방');
  });

  it('식당 분류 업데이트합니다.', () => {
    const state = reducer(prevState, updateReservations('category', '한식'));

    expect(state.name).toBe('한식');
  });

  it('식당 주소 업데이트합니다.', () => {
    const state = reducer(prevState, updateReservations('category', '서울시 강남구'));

    expect(state.name).toBe('서울시 강남구');
  });

  it('식당 예약 정보들을 추가합니다.', () => {
    const state = reducer({
      ...prevState,
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    }, addReservations());

    expect(state.reservations).toHaveLength(1);
    expect(state.name).toBe('');
    expect(state.category).toBe('');
    expect(state.address).toBe('');
  });
});
