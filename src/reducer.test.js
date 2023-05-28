import reducer from './reducer';
import { updateInput, addRestaurant } from './action';

describe('reducer', () => {
  describe('restaurant input이 입력된다', () => {
    it('restaurant input이 변경된 상태를 반환한다.', () => {
      const prevState = {
        id: 100,
        title: '',
        sort: '',
        location: '',
        restaurants: [],
      };
      const inputName = {
        name: 'title',
        value: 'test',
      };

      const { name, value } = inputName;
      const state = reducer(prevState, updateInput({ name, value }));
      expect(state.title).toBe('test');
    });
  });

  describe('restaurant를 추가한다', () => {
    it('restaurants 배열에 추가되어 새로운 상태를 반환한다.', () => {
      const prevState = {
        id: 100,
        title: 'title test',
        sort: 'sort test',
        location: 'location test',
        restaurants: [],
      };
      const state = reducer(prevState, addRestaurant());
      expect(state.restaurants[0].title).toBe('title test');
      expect(state.restaurants[0].id).toBe(100);
      expect(state.restaurants).toHaveLength(1);
      expect(state.id).toBe(101);
    });
  });
});
