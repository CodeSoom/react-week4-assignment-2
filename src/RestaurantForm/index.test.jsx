import { fireEvent, render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantForm from '.';
import { ACTION_TYPES } from '../store/actions';

jest.mock('react-redux');

describe('RestaurantForm', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      name: '',
    }));
  });

  it('renders inputs and submit button', () => {
    const { getByPlaceholderText, getByText } = render(<RestaurantForm />);

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('주소')).toBeInTheDocument();
    expect(getByText('등록')).toBeInTheDocument();
  });

  it('render name', () => {
    const testName = '김밥천국';
    useSelector.mockImplementation((selector) => selector({ name: testName }));
    const { getByLabelText } = render(<RestaurantForm />);

    expect(getByLabelText('이름')).toHaveValue(testName);
  });

  it('changes name', () => {
    const { getByPlaceholderText } = render(<RestaurantForm />);
    useSelector.mockImplementation((selector) => selector({ name: '' }));
    fireEvent.change(getByPlaceholderText('이름'), { target: { value: '김밥천국' } });

    expect(dispatch).toHaveBeenCalledWith({
      type: ACTION_TYPES.CHANGE_NAME,
      payload: '김밥천국',
    });
  });
});
