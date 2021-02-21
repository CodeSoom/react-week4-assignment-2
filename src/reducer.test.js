import reducer from './reducer';

import updateReservations from './actions';

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
});
