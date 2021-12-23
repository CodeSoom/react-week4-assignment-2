import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('has a input element with "이름" placeholder', () => {
    const { getByPlaceholderText } = render(<Input />);

    expect(getByPlaceholderText('이름')).not.toBeNull();
  });

  it('has a input element with "분류" placeholder', () => {
    const { getByPlaceholderText } = render(<Input />);

    expect(getByPlaceholderText('분류')).not.toBeNull();
  });

  it('has a input element with "주소" placeholder', () => {
    const { getByPlaceholderText } = render(<Input />);

    expect(getByPlaceholderText('주소')).not.toBeNull();
  });

  it('has a button with "등록" text', () => {
    const { getByText } = render(<Input />);

    expect(getByText('등록')).not.toBeNull();
  });
});
