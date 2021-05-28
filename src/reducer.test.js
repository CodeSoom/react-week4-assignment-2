import reducer from './reducer';

import {
  updateName,
  updateCategory,
  updateAddress,
  addRestaurant,
} from './actions';

describe('reduecer 관련 테스트', () => {
  context('입력값을 입력하면 상태가 변하는 테스트', () => {
    describe('updateName', () => {
      it('새로운 restaurant(상태)가 만들어지고 새로운 이름으로 변경된다', () => {
        const previouRestaurant = {
          name: '',
          restaurants: [],
        };

        const restaurant = reducer(previouRestaurant, updateName('마녀주방'));

        expect(restaurant.name).toBe('마녀주방');
      });
    });

    describe('updateCategory', () => {
      it('새로운 restaurant(상태)가 만들어지고 새로운 분류로 변경된다', () => {
        const previouRestaurant = {
          cartegory: '',
          restaurants: [],
        };

        const restaurant = reducer(previouRestaurant, updateCategory('한식'));

        expect(restaurant.category).toBe('한식');
      });
    });

    describe('updateAddress', () => {
      it('새로운 restaurant(상태)가 만들어지고 새로운 주소로 변경된다', () => {
        const previouRestaurant = {
          address: '',
          restaurants: [],
        };

        const restaurant = reducer(previouRestaurant, updateAddress('서울시 강남구'));

        expect(restaurant.address).toBe('서울시 강남구');
      });
    });
  });

  context('등록 버튼을 누르면 입력한 상태값 추가에 대한 테스트', () => {
    describe('이름, 분류, 주소가 모두 입력되면 리스트에 추가된다', () => {
      it('입력된 새로운 이름, 분류, 주소가 화면에 추가된다', () => {
        const previouRestaurant = {
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
          restaurants: [],
        };

        const restaurant = reducer(previouRestaurant, addRestaurant());

        expect(restaurant.restaurants[0].name).toBe('마녀주방');
        expect(restaurant.restaurants[0].category).toBe('한식');
        expect(restaurant.restaurants[0].address).toBe('서울시 강남구');
      });
    });

    describe('이름, 분류, 주소가 입력되지 않으면 리스트에 추가되지 않는다', () => {
      it('입력된 값이 없으면 화면에 변화가 일어나지 않는다', () => {
        const previouRestaurant = {
          name: '',
          category: '',
          address: '',
          restaurants: [],
        };

        const restaurant = reducer(previouRestaurant, addRestaurant());

        expect(restaurant.restaurants[0].name).toBe('');
        expect(restaurant.restaurants[0].category).toBe('');
        expect(restaurant.restaurants[0].address).toBe('');
      });
    });
  });

  context('예외 상황에 대한 테스트', () => {
    describe('동작이 없을 경우', () => {
      it('상태값이 그대로 반환된다', () => {
        const previouRestaurant = {
          name: '',
          restaurants: [],
        };

        const action = {};

        const restaurant = reducer(previouRestaurant, action);

        expect(restaurant.name).toBe('');
      });
    });

    describe('상태와 동작이 없을 경우', () => {
      it('초기값이 반환된다', () => {
        const restaurant = reducer();

        expect(restaurant.name).toBe('');
        expect(restaurant.category).toBe('');
        expect(restaurant.address).toBe('');
      });
    });
  });
});
