/* 계획
1. input 3개, 버튼이 잘 그려진다
2. input change나 button click이 잘 호출된다
*/
import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('show inputs, button element', () => {
    const { container, getByText } = render(<Input />);

    expect(getByText('등록')).not.toBeNull();
    expect(
      container.getElementsByClassName('restaurant-inputs'),
    ).not.toBeNull();
  });

  it('call input change, button click function', () => {
    const handleChange = jest.fn();
    const handleClick = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <Input onClick={handleClick} onChange={handleChange} />,
    );

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '마녀피자' },
    });

    expect(handleChange).toBeCalledWith('마녀피자');

    fireEvent.click(getByText('등록'));

    expect(handleClick).toBeCalled();
  });
});
