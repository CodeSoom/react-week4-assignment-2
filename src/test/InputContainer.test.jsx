import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import {
  updateRestaurantAddress,
  updateRestaurantCategory,
  updateRestaurantName,
} from '../actions/actions';

import InputContainer from '../container/InputContainer';

jest.mock('react-redux');

describe('<InputContainer />', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  function renderInput() {
    useSelector.mockImplementation((selector) => selector({
      name: '',
      category: '',
      address: '',
    }));

    return render(
      <InputContainer />,
    );
  }

  it('renders inputs, "등록" button', () => {
    const {
      getByRole,
      getByPlaceholderText,
    } = renderInput();

    expect(getByPlaceholderText(/이름/)).toBeInTheDocument();
    expect(getByPlaceholderText(/분류/)).toBeInTheDocument();
    expect(getByPlaceholderText(/주소/)).toBeInTheDocument();
    expect(getByRole('button', { name: /등록/ })).toBeInTheDocument();
  });

  it('calls handleChange when change input value', () => {
    const { getByPlaceholderText } = renderInput();

    expect(dispatch).not.toBeCalled();

    fireEvent.change(
      getByPlaceholderText(/이름/),
      { target: { value: '국밥' } },
    );
    fireEvent.change(
      getByPlaceholderText(/분류/),
      { target: { value: '국' } },
    );
    fireEvent.change(
      getByPlaceholderText(/주소/),
      { target: { value: '부산 연제구' } },
    );

    expect(dispatch).toBeCalledTimes(3);
    expect(dispatch).toBeCalledWith(updateRestaurantName('국밥'));
    expect(dispatch).toBeCalledWith(updateRestaurantCategory('국'));
    expect(dispatch).toBeCalledWith(updateRestaurantAddress('부산 연제구'));
  });

  it('calls handleClickAddRestaurant when click "등록" button', () => {
    dispatch.mockClear();

    const { getByRole } = renderInput();

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByRole('button', { name: /등록/ }));

    expect(dispatch).toBeCalled();
  });
});
