import reducer from './reducer';

import {
  updateText,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  describe('updateText', () => {
    it('change name text', () => {
      const state = reducer({
        inputs: [
          {
            name: 'name',
            placeholder: '이름',
            value: '',
          },
          {
            name: 'category',
            placeholder: '분류',
            value: '',
          },
          {
            name: 'address',
            placeholder: '주소',
            value: '',
          },
        ],
      }, updateText('name', '코드숨 식당'));

      expect(state.inputs[0].value).toBe('코드숨 식당');
    });
  });

  describe('addRestaurant', () => {
    function reduceAddRestaurant(nameValue, categoryValue, addressValue) {
      return reducer({
        newId: 103,
        inputs: [
          {
            name: 'name',
            placeholder: '이름',
            value: nameValue,
          },
          {
            name: 'category',
            placeholder: '분류',
            value: categoryValue,
          },
          {
            name: 'address',
            placeholder: '주소',
            value: addressValue,
          },
        ],
        restaurants: [
          {
            id: 101,
            name: '마녀주방',
            category: '한식',
            address: '서울시 강남구',
          },
          {
            id: 102,
            name: '시카고피자',
            category: '양식',
            address: '이태원동',
          },
          {
            id: 103,
            name: '카와미',
            category: '일식',
            address: '분당구 정자동',
          },
        ],
      }, addRestaurant());
    }

    context('with existed restaurant data - name, category, address', () => {
      it('appends a new restaurant into restaurants', () => {
        const state = reduceAddRestaurant('코드숨 식당', '한식', '서울시');

        expect(state.restaurants).toHaveLength(4);
        expect(state.restaurants[3].id).not.toBeUndefined();
        expect(state.restaurants[3].name).toBe('코드숨 식당');
        expect(state.restaurants[3].category).toBe('한식');
        expect(state.restaurants[3].address).toBe('서울시');
      });

      it('clears restaurant input - name, category, address', () => {
        const state = reduceAddRestaurant('코드숨 식당', '한식', '서울시');

        expect(state.inputs[0].value).toBe('');
        expect(state.inputs[1].value).toBe('');
        expect(state.inputs[2].value).toBe('');
      });
    });

    context('with no existed restaurant data', () => {
      it('doesn\'t work add into restaurants', () => {
        const state = reduceAddRestaurant('', '', '');

        expect(state.restaurants).toHaveLength(3);
      });
    });
  });

  describe('exception', () => {
    const state = reducer(
      undefined, { type: '', payload: {} },
    );

    it('return state', () => {
      expect(state).toBe(state);
    });
  });
});
