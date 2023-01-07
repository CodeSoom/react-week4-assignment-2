import reducer from './reducer';
import { addNewRestaurant, updateFormInputs } from './actions';
import { Restaurant } from '../@types/restaurant';
import { emptyInputValues } from '../fixtures/inputValues';

const initialState = {
  restaurants: [],
  inputValues: emptyInputValues,
};

const newRestaurant = new Restaurant({
  name: '할매국밥',
  category: '한식',
  location: '부산',
});

describe('reducer', () => {
  describe('addNewRestaurant', () => {
    it('새로운 레스토랑 리스트를 반환한다.', () => {
      const store = reducer(initialState, addNewRestaurant(newRestaurant));

      expect(store.restaurants).toHaveLength(1);
    });
  });

  describe('updateFormInputs', () => {
    it('새로운 input name의 value를 반환한다.', () => {
      const store = reducer(initialState, updateFormInputs('name', '안녕하세요'));

      expect(store.inputValues).toStrictEqual({
        name: '안녕하세요',
        category: '',
        location: '',
      });
    });
  });
});
