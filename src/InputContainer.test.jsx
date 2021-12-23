import { fireEvent, render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    name: '사가식탁',
    category: '중식당',
    address: '성복역 근처',
  }));
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => (dispatch));

  const { getByText, getByDisplayValue } = render(<InputContainer />);

  expect(getByText('Restaurants')).not.toBeNull();

  fireEvent.change(getByDisplayValue('사가식탁'), { target: { value: '' } });
  expect(dispatch).toBeCalledWith(
    {
      type: 'handleChangeNameValue',
      payload: {
        name: '',
      },
    },
  );
  fireEvent.change(getByDisplayValue('중식당'), { target: { value: '' } });
  expect(dispatch).toBeCalledWith(
    {
      type: 'handleChangeCategroryValue',
      payload: {
        category: '',
      },
    },
  );
  fireEvent.change(getByDisplayValue('성복역 근처'), { target: { value: '' } });
  expect(dispatch).toBeCalledWith(
    {
      type: 'handleChangeAddressValue',
      payload: {
        address: '',
      },
    },
  );
  fireEvent.click(getByText('등록'));

  expect(dispatch).toBeCalledWith(
    {
      type: 'saveData',
      payload: {
        data: {
          name: '사가식탁',
          category: '중식당',
          address: '성복역 근처',
        },
      },
    },
  );
});
