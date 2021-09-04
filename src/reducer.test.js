import reducer from './reducer';

import {
  updateRestaurant,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  describe('updateRestaurant', () => {
    const state = reducer({
      inputTitles: [
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
    }, updateRestaurant('name', 'New Restaurant'));

    expect(state.inputTitles[0].value).toBe('New Restaurant');
  });

  describe('addRestaurant', () => {
    function reduceAddRestaurant(newName, newCategory, newAddress) {
      return reducer({
        newId: 103,
        inputTitles: [
          {
            name: 'name',
            placeholder: '이름',
            value: newName,
          },
          {
            name: 'category',
            placeholder: '분류',
            value: newCategory,
          },
          {
            name: 'address',
            placeholder: '주소',
            value: newAddress,
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

    context('with existed restaurant', () => {
      it('adds a new restaurant into restaurants', () => {
        const state = reduceAddRestaurant('New Restaurant', '중식', '서울시');

        expect(state.restaurants).toHaveLength(4);
        expect(state.restaurants[3].id).not.toBeUndefined();
        expect(state.restaurants[3].name).toBe('New Restaurant');
        expect(state.restaurants[3].category).toBe('중식');
        expect(state.restaurants[3].address).toBe('서울시');
      });

      it('clears inputTitles', () => {
        const state = reduceAddRestaurant('New Restaurant', '중식', '서울시');

        expect(state.inputTitles[0].value).toBe('');
        expect(state.inputTitles[1].value).toBe('');
        expect(state.inputTitles[2].value).toBe('');
      });
    });

    context('without existed restaurant', () => {
      it('does not work', () => {
        const state = reduceAddRestaurant('', '', '');

        expect(state.restaurants).toHaveLength(3);
      });
    });
  });

  describe('empty restaurants', () => {
    const state = reducer(
      undefined, { type: '', payload: {} },
    );

    it('shows empty restaurant list', () => {
      expect(state).toBe(state);
    });
  });
});
