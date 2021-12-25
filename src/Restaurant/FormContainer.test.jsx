import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import FormContainer from './FormContainer';
import { addRestaurant } from '../actions';
import { restaurant } from '../fixtures/restaurant';

jest.mock('react-redux');

describe('FormContainer', () => {
  test('레스토랑을 추가한다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));
    const { getByText } = render(<FormContainer />);

    fireEvent.click(getByText('등록'));
    expect(dispatch).toBeCalledWith(addRestaurant(1));
  });

  test('레스토랑을 작성폼을 수정한다.', () => {
    const { getByDisplayValue } = render(<FormContainer />);

    fireEvent.change(getByDisplayValue('가게명'), { target: { value: '홍콩반점' } });
    expect(dispatch).toBeCalledWith(changeForm({ title: '홍콩반점' }));
    fireEvent.change(getByDisplayValue('주소'), { target: { value: '강남구' } });
    expect(dispatch).toBeCalledWith(changeForm({ address: '강남구' }));
    fireEvent.change(getByDisplayValue('음식종류'), { target: { value: '중식' } });
    expect(dispatch).toBeCalledWith(changeForm({ menu: '중식' }));
  });
});
