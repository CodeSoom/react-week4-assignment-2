import reducer from './reducer';
import { addRestaurant, updateField } from './actions';

describe('reducer', () => {
  context('with invaild action', () => {
    it('returns same state', () => {
      const newState = reducer(undefined, { type: 'invaild' });

      expect(newState).toEqual({
        id: 1,
        name: '',
        category: '',
        address: '',
        restaurants: [],
      });
    });
  });

  context('with vaild action', () => {
    it('adds new restaurant and updates id', () => {
      const newRestaurant = {
        id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
      };

      const newState = reducer(undefined, addRestaurant(newRestaurant));

      expect(newState).toEqual({
        id: 2,
        name: '',
        category: '',
        address: '',
        restaurants: [newRestaurant],
      });
    });

    it('updates field with input value', () => {
      const newState = reducer(undefined, updateField(
        { field: 'name', value: '마녀 주방' },
      ));

      expect(newState).toEqual({
        id: 1,
        name: '마녀 주방',
        category: '',
        address: '',
        restaurants: [],
      });
    });
  });
});
