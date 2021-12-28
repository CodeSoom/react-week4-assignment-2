import {
  updateData, updateInput,
} from './actions';
import reducer from './reducer';

describe('reducer', () => {
  const state = {
    newId: 100,
    name: '',
    category: '',
    address: '',
    data: [],
  };

  context('잘못된 type이라면', () => {
    it('원래 state를 return한다.', () => {
      expect(reducer(state, {
        type: 'worng Actions',
      })).toBe(state);
    });
  });

  context('state가 없다면', () => {
    it('원래 state를 return한다.', () => {
      expect(reducer(undefined, {
        type: 'worng Actions',
      })).toStrictEqual(state);
    });
  });

  describe('updateValue', () => {
    it('changes state with new NameValue', () => {
      expect(reducer(state, updateInput('name', 'name')).name).toBe('name');
    });
    it('changes state with new CategoryValue', () => {
      expect(reducer(state, updateInput('category', 'category')).category).toBe('category');
    });
    it('changes state with new AddressValue', () => {
      expect(reducer(state, updateInput('address', 'address')).address).toBe('address');
    });
  });

  describe('updateData', () => {
    context('입력칸이 모두 채워져있으면', () => {
      it('작동된다.', () => {
        const filledstate = {
          ...state,
          name: 'name',
          category: 'category',
          address: 'address',
        };

        expect(reducer(filledstate, updateData(
        )).data)
          .toStrictEqual([{
            id: 100,
            name: 'name',
            category: 'category',
            address: 'address',
          }]);
      });
    });

    context('입력칸 하나가 비어있으면', () => {
      it('작동이 안된다.', () => {
        expect(reducer(state, updateData(
          '', 'category', 'address',
        )).data)
          .toHaveLength(0);
      });
    });
  });
});
