import reducer from './reducer';
import {
  updateName, updateCategory, updateAddress, addRestaurant,
} from './actions';

describe('reducer', () => {
  it('정의되어 있지 않은 action이 들어오면 state를 그대로 반환한다.', () => {
    const previousState = {
      nextId: 100,
      name: '마녀식당',
      category: '한식',
      address: '서울시 강남구',
      restaurants: [],
    };
    const state = reducer(previousState, { type: 'sampleAction' });

    expect(state).toStrictEqual(previousState);
  });

  it('state를 넘겨주지 않으면 initalState를 반환한다.', () => {
    const initialState = {
      nextId: 100,
      name: '마녀식당',
      category: '한식',
      address: '서울시 강남구',
      restaurants: [],
    };
    const state = reducer(undefined, { type: 'sampleSction' });

    expect(state).toStrictEqual(initialState);
  });

  describe('updateName', () => {
    context('name이 비어있다면', () => {
      it('name을 업데이트하지 않는다.', () => {

      });
    });

    context('name이 비어있지 않다면', () => {
      it('name을 업데이트한다.', () => {

      });
    });
  });

  describe('updateCategory', () => {
    context('category가 비어있다면', () => {
      it('category를 업데이트하지 않는다.', () => {

      });
    });

    context('category가 비어있지 않다면', () => {
      it('category를 업데이트한다.', () => {

      });
    });
  });

  describe('updateAddress', () => {
    context('address가 비어있다면', () => {
      it('address를 업데이트하지 않는다.', () => {

      });
    });

    context('address가 비어있지 않다면', () => {
      it('address를 업데이트한다.', () => {

      });
    });
  });

  describe('addRestaurant', () => {
    context('name, category, address중 하나라도 비어 있다면', () => {
      it('레스토랑을 추가하지 않는다.', () => {

      });
    });

    context('name, category, address가 모두 존재하면', () => {
      it('레스토랑을 추가한다.', () => {

      });
    });
  });
});
