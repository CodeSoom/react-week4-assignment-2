import { addRestaurant } from '../actions/restaurant';
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

  describe('addRestaurant', () => {
    it('addRestaurant action을 레스토랑 이름, 분류, 주소와 함께 restaurantReducer에 전달하면 restaurants에 restaurant가 추가됩니다.', () => {
      const restaurantPayload = { name: 'foo', category: 'bar', address: 'baz' };
      const state = restaurantReducer(initialState, addRestaurant(restaurantPayload));

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurants[0]).toEqual(restaurantPayload);
    });
  });
});
