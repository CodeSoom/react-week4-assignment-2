import {
  updateAddressValue, updateCategoryValue, updateData, updateNameValue,
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

  describe('updateNameValue', () => {
    it('changes state with new NameValue', () => {
      expect(reducer(state, updateNameValue('name')).name)
        .toBe('name');
    });
  });

  describe('updateAddressValue', () => {
    it('changes state with new AddressValue', () => {
      expect(reducer(state, updateAddressValue('address')).address)
        .toBe('address');
    });
  });

  describe('updateCategoryValue', () => {
    it('changes state with new CategoryValue', () => {
      expect(reducer(state, updateCategoryValue('category')).category)
        .toBe('category');
    });

    describe('updateData', () => {
      context('입력칸이 모두 채워져있으면', () => {
        it('작동된다.', () => {
          expect(reducer(state, updateData(
            'name', 'category', 'address',
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
        it('작동아 안된다.', () => {
          expect(reducer(state, updateData(
            '', '', 'address',
          )).data)
            .toHaveLength(0);
        });
      });
    });
  });
});
