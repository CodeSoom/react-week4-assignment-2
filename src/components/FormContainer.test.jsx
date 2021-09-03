import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from '../../__mocks__/react-redux';
import FormContainer from './FormContainer';

test('FormContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    nextId: 100,
    name: '',
    category: '',
    address: '',
    restaurants: [],
  }));

  const { getByLabelText, getByText } = render(<FormContainer />);

  fireEvent.change(getByLabelText('이름'), { target: { value: '마녀주방' } });
  expect(dispatch).toBeCalledWith({ type: 'updateName', payload: { name: '마녀주방' } });

  fireEvent.change(getByLabelText('분류'), { target: { value: '한식' } });
  expect(dispatch).toBeCalledWith({ type: 'updateCategory', payload: { category: '한식' } });

  fireEvent.change(getByLabelText('주소'), { target: { value: '서울시 강남구' } });
  expect(dispatch).toBeCalledWith({ type: 'updateAddress', payload: { address: '서울시 강남구' } });

  fireEvent.click(getByText('등록'));
  expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
});
