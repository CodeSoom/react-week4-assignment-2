import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

// Input test
// 목적: 입력값이 있을 때만 onChange hanlder를 호출하는가?

// Page: onChangeTitle, value(infoTitle)
//  - render Input: 이름, 분류, 주소
// 1. without input
//  - not call onChange handler
// 2. with input
//  - calls onChange handler

describe('Input', () => {
  const value = '';
  const handleChange = jest.fn();

  const renderInput = () => render(
    <Input
      value={value}
      onChangeTitle={handleChange}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Input', () => {
    const { getByPlaceholderText } = renderInput();

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('이름').value).toBe(value);
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('분류').value).toBe(value);
    expect(getByPlaceholderText('주소')).toBeInTheDocument();
    expect(getByPlaceholderText('주소').value).toBe(value);
  });

  describe('without input', () => {
    it('not call onChange handler', () => {
      const { getByPlaceholderText } = renderInput();

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value },
      });
      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value },
      });
      fireEvent.change(getByPlaceholderText('주소'), {
        target: { value },
      });

      expect(handleChange).not.toBeCalled();
    });
  });

  describe('with input', () => {
    it('calls onChange handler', () => {
      const { getByPlaceholderText } = renderInput();

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '모토쿠라시' },
      });
      fireEvent.change(getByPlaceholderText('분류'), {
        target: { value: '일식' },
      });
      fireEvent.change(getByPlaceholderText('주소'), {
        target: { value: '송파구' },
      });

      expect(handleChange).toBeCalled();
    });
  });
});
