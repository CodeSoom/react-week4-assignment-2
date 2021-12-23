import restaurantReducer, { initialState } from './restaurant';

describe('restaurantReducer', () => {
  it('아무 값도 전달하지 않는다면 initialState를 반환합니다.', () => {
    expect(restaurantReducer()).toEqual(initialState);
  });

  it('action을 전달하지 않는다면 이전 상태를 반환합니다.', () => {
    const prevState = restaurantReducer();
    const nextState = restaurantReducer(prevState);

    expect(nextState).toEqual(prevState);
  });
});
