import restaurantReducer, { initialState } from './restaurant';

describe('restaurantReducer', () => {
  it('아무 값도 전달하지 않는다면 initialState를 반환합니다.', () => {
    expect(restaurantReducer()).toEqual(initialState);
  });
});
