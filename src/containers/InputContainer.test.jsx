import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';
import { addRestaurant, updateRestaurant } from '../actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  const renderInputContainer = () => render(<InputContainer />);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  it('식당 정보를 입력하면, "updateRestaurant" 액션이 디스패치 된다.', () => {
    const { getByPlaceholderText } = renderInputContainer();

    fireEvent.change(getByPlaceholderText('이름'), { target: { value: '식당-1' } });
    expect(dispatch).toBeCalledWith(updateRestaurant('name', '식당-1'));

    fireEvent.change(getByPlaceholderText('분류'), { target: { value: '분류-1' } });
    expect(dispatch).toBeCalledWith(updateRestaurant('category', '분류-1'));

    fireEvent.change(getByPlaceholderText('주소'), { target: { value: '주소-1' } });
    expect(dispatch).toBeCalledWith(updateRestaurant('address', '주소-1'));
  });

  it('버튼을 클릭하면, "addRestaurant" 액션이 디스패치 된다.', () => {
    const { getByText } = renderInputContainer();

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledWith(addRestaurant({
      name: '',
      category: '',
      address: '',
    }));
  });
});
