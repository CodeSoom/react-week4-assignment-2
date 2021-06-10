import { render, fireEvent, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { addRestaurant } from './actions';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('renders inputs & button', () => {
    const { container, queryByPlaceholderText, getByText } = render(<InputContainer />);
    // screen.debug();
    expect(queryByPlaceholderText('이름'));
    expect(queryByPlaceholderText('분류'));
    expect(queryByPlaceholderText('주소'));
    expect(container).toHaveTextContent('등록');

    expect(dispatch).not.toBeCalledWith(addRestaurant());
    fireEvent.click(getByText('등록'));
    expect(dispatch).toBeCalledWith(addRestaurant());
  });
});
