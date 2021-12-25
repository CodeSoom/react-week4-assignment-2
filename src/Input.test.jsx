/* 계획
1. input 3개, 버튼이 잘 그려진다
2. input change나 button click이 잘 호출된다
*/
import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';
import Input from './Input';

jest.mock('react-redux');

describe('Input', () => {
  const restaurant = {
    newId: 0,
    changed: {
      name: '',
      type: '',
      address: '',
    },
    registered: [],
  };
  useSelector.mockImplementation((selector) => selector());

  it('show inputs, button element', () => {
    const { getByPlaceholderText, getByText } = render(
      <Input restaurant={restaurant} />,
    );

    expect(getByText('등록')).not.toBeNull();
    expect(getByPlaceholderText('이름')).not.toBeNull();
    expect(getByPlaceholderText('분류')).not.toBeNull();
    expect(getByPlaceholderText('주소')).not.toBeNull();
  });

  it('call input change, button click function', () => {
    const handleChange = jest.fn();
    const handleClick = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <Input
        onClick={handleClick}
        onChange={handleChange}
        restaurant={restaurant}
      />,
    );

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '마녀피자' },
    });

    expect(handleChange).toBeCalledWith('마녀피자', 'name');

    fireEvent.click(getByText('등록'));

    expect(handleClick).toBeCalled();
  });
});
