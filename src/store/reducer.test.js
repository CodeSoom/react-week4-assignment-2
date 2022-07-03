import { addRestaurant, updateInputContent } from './actions';

import reducer, { initialState } from './reducer';

describe('reducer', () => {
  context('state가 없을 때,', () => {
    it('initailstate를 반환합니다.', () => {
      const state = reducer(
        undefined,
        {},
      );

      expect(state).toEqual(initialState);
    });
  });

  describe('updateInputValue', () => {
    context('target이 name 일 때', () => {
      it('title이 입력한 값으로 변경하여 반환합니다.', () => {
        const state = reducer(
          { title: '' },
          updateInputContent({ targetType: 'title', content: '프론트' }),
        );

        expect(state.title).toBe('프론트');
      });
    });

    context('target이 category 일 때', () => {
      it('category가 입력한 값으로 변경하여 반환합니다.', () => {
        const state = reducer(
          { category: '' },
          updateInputContent({ targetType: 'category', content: '양식' }),
        );

        expect(state.category).toBe('양식');
      });
    });

    context('target이 address 일 때', () => {
      it('address가 입력한 값으로 변경하여 반환합니다.', () => {
        const state = reducer(
          { address: '' },
          updateInputContent({ targetType: 'address', content: '잠실' }),
        );

        expect(state.address).toBe('잠실');
      });
    });
  });

  describe('addRestaurant', () => {
    context('title category와 address가 하나라도 비어있을 시', () => {
      it('아무일도 일어나지 않습니다.', () => {
        const state = reducer(
          {
            newId: 100,
            title: '',
            category: '',
            address: '',
            restaurants: [],
          }, addRestaurant(),
        );

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('title과 category와 address가 있을 때', () => {
      function reduceAddRestaurant() {
        return reducer({
          newId: 100,
          title: '떡볶이',
          category: '분식',
          address: '잠실',
          restaurants: [],
        }, addRestaurant());
      }

      it('restaurants가 새로운 restaurant이 담겨 반환됩니다', () => {
        const state = reduceAddRestaurant();

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).not.toBeUndefined();
        expect(state.restaurants[0].title).toBe('떡볶이');
      });

      it('name, category, address를 비워줍니다.', () => {
        const state = reduceAddRestaurant();

        expect(state.title).toBe('');
        expect(state.category).toBe('');
        expect(state.address).toBe('');
      });
    });
  });
});
