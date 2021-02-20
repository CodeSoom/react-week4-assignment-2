import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  it('이름 항목의 elemnet들을 확인합니다.', () => {
    const { getByPlaceholderText, getByDisplayValue } = render((
      <Input
        value="기존 식당이름"
        onChange={handleChange}
      />));

    expect(getByPlaceholderText(/이름/)).not.toBeNull();

    expect(getByDisplayValue(/기존 식당이름/)).not.toBeNull();
    expect(handleChange).not.toBeCalled();
    fireEvent.change(getByPlaceholderText(/이름/), {
      target: { value: '마녀식당' },
    });
    expect(handleChange).toBeCalled();
  });

  it('분류 항목의 elemnet들을 확인합니다.', () => {
    const { getByPlaceholderText, getByDisplayValue } = render((
      <Input
        value="기존 식당분류"
        onChange={handleChange}
      />));

    expect(getByPlaceholderText(/분류/)).not.toBeNull();

    expect(getByDisplayValue(/기존 식당분류/)).not.toBeNull();
    expect(handleChange).not.toBeCalled();
    fireEvent.change(getByPlaceholderText(/분류/), {
      target: { value: '한식' },
    });
    expect(handleChange).toBeCalled();
  });

  it('주소 항목의 elemnet들을 확인합니다.', () => {
    const { getByPlaceholderText, getByDisplayValue } = render((
      <Input
        value="기존 식당주소"
        onChange={handleChange}
      />));

    expect(getByPlaceholderText(/주소/)).not.toBeNull();

    expect(getByDisplayValue(/기존 식당주소/)).not.toBeNull();
    expect(handleChange).not.toBeCalled();
    fireEvent.change(getByPlaceholderText(/주소/), {
      target: { value: '서울시 강남구' },
    });
    expect(handleChange).toBeCalled();
  });
});
