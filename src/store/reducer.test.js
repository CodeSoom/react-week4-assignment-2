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

  it('state를 넘겨주지 않으면 initalState를 사용한다.', () => {
    const initialState = {
      nextId: 100,
      name: '',
      category: '',
      address: '',
      restaurants: [],
    };
    const state = reducer(undefined, { type: 'sampleSction' });

    expect(state).toStrictEqual(initialState);
  });

  describe('updateName', () => {
    it('name을 업데이트한다.', () => {
      const state = reducer({
        name: '',
      }, updateName('New Name'));

      expect(state.name).toBe('New Name');
    });
  });

  describe('updateCategory', () => {
    it('category를 업데이트한다.', () => {
      const state = reducer({
        category: '',
      }, updateCategory('New Category'));

      expect(state.category).toBe('New Category');
    });
  });

  describe('updateAddress', () => {
    it('address를 업데이트한다.', () => {
      const state = reducer({
        address: '',
      }, updateAddress('New Address'));

      expect(state.address).toBe('New Address');
    });
  });

  describe('addRestaurant', () => {
    const reducerAddRestaurant = (state) => reducer(state, addRestaurant());

    context('name, category, address중 하나라도 비어 있다면', () => {
      it('레스토랑을 추가하지 않는다.', () => {
        const state = reducerAddRestaurant({
          name: '',
          category: '한식',
          address: '서울시 강남구',
          restaurants: [],
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('name, category, address가 모두 존재하면', () => {
      it('레스토랑을 추가한다.', () => {
        const state = reducerAddRestaurant({
          name: '마녀식당',
          category: '한식',
          address: '서울시 강남구',
          restaurants: [],
        });

        expect(state.restaurants).toHaveLength(1);
      });

      it('name, category, address가 비워진다.', () => {
        const state = reducerAddRestaurant({
          name: '마녀식당',
          category: '한식',
          address: '서울시 강남구',
          restaurants: [],
        });

        expect(state.name).toBe('');
        expect(state.category).toBe('');
        expect(state.address).toBe('');
      });
    });
  });
});
