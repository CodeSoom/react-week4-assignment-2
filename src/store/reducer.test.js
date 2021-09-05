import reducer from './reducer';
import {
  updateRestaurant, addRestaurant,
} from './actions';
import restaurants from '../../__mocks__/restaurants';

describe('reducer', () => {
  it('정의되어 있지 않은 action이 들어오면 state를 그대로 반환한다.', () => {
    const previousState = {
      newId: 100,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [],
    };
    const state = reducer(previousState, { type: 'sampleAction' });

    expect(state).toStrictEqual(previousState);
  });

  it('state를 넘겨주지 않으면 initalState를 사용한다.', () => {
    const initialState = {
      newId: 100,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [],
    };
    const state = reducer(undefined, { type: 'sampleSction' });

    expect(state).toStrictEqual(initialState);
  });

  describe('updateRestaurant', () => {
    it('name의 키를 가진 value를 업데이트한다.', () => {
      const state = reducer({
        restaurant: {},
      }, updateRestaurant('name', '마녀주방'));

      expect(state.restaurant.name).toBe('마녀주방');
    });
  });

  describe('addRestaurant', () => {
    const reducerAddRestaurant = (state) => reducer(state, addRestaurant());

    context('name, category, address중 하나라도 비어 있다면', () => {
      it('레스토랑을 추가하지 않는다.', () => {
        const state = reducerAddRestaurant({
          newId: 100,
          restaurant: {
            name: '',
            category: '한식',
            address: '서울시 강남구',
          },
          restaurants: [],
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('name, category, address가 모두 존재하면', () => {
      it('레스토랑을 추가한다.', () => {
        const state = reducerAddRestaurant({
          newId: 100,
          restaurant: restaurants[0],
          restaurants: [],
        });

        expect(state.restaurants).toHaveLength(1);
      });

      it('name, category, address가 비워진다.', () => {
        const state = reducerAddRestaurant({
          restaurant: restaurants[0],
          restaurants: [],
        });

        expect(state.restaurant.name).toBe('');
        expect(state.restaurant.category).toBe('');
        expect(state.restaurant.address).toBe('');
      });
    });
  });
});
