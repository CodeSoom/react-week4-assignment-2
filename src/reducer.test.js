import reducer from './reducer';

import {
  updateRestaurantInformation,
  addInformation,
  setRestaurants,
} from './actions';

import {
  restaurants,
  initialState,
} from './__fixtures__/restaurants';

function setRestaurantState(name, category, address) {
  return {
    ...initialState,
    name,
    category,
    address,
  };
}

describe('reducer', () => {
  context('존재하지 않는 action을 전달한 경우', () => {
    it('state값이 변화없이 그대로 반환된다', () => {
      const state = reducer({}, { type: 'unknownAction' });

      expect(state).toEqual({});
    });
  });

  context('빈 state 값 파라미터로 전달한 경우', () => {
    it('initialState가 반환된다', () => {
      const state = reducer(undefined, { type: 'addInformation' });

      expect(state).toEqual(initialState);
    });
  });

  describe('updateName', () => {
    it('이름이 변경된다.', () => {
      const state = reducer(initialState, updateRestaurantInformation('name', '콩나물해장국'));

      expect(state.name).toBe('콩나물해장국');
    });
  });

  describe('updateCategory', () => {
    it('분류가 변경된다.', () => {
      const state = reducer(initialState, updateRestaurantInformation('category', '한식'));

      expect(state.category).toBe('한식');
    });
  });

  describe('updateAddress', () => {
    it('주소가 변경된다.', () => {
      const state = reducer(initialState, updateRestaurantInformation('address', '강릉'));

      expect(state.address).toBe('강릉');
    });
  });

  describe('addInformation', () => {
    context('이름, 분류, 주소등 모든 정보가 있을 경우', () => {
      const restaurantState = setRestaurantState('돈스파이크', '양식', '인천');

      it('레스토랑 정보가 추가된다', () => {
        const state = reducer(restaurantState, addInformation());

        expect(state.informations).toHaveLength(1);
      });

      it('레스토랑 정보가 추가된 후 입력정보가 초기화된다.', () => {
        const state = reducer(restaurantState, addInformation());

        expect(state.name).toBe('');
        expect(state.category).toBe('');
        expect(state.address).toBe('');
      });
    });

    context('이름, 분류, 주소 중 정보가 하나라도 없을 경우', () => {
      it('레스토랑 정보가 추가되지 않는다.', () => {
        const state = reducer(setRestaurantState('', '양식', '인천'), addInformation());

        expect(state.informations).toHaveLength(0);
      });
    });
  });

  describe('setRestaurants', () => {
    it('레스토랑 정보가 추가된다.', () => {
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.informations).toHaveLength(3);
    });
  });
});
