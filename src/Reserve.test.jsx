import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Reserve from './Reserve';

describe('Input', () => {
  const onChange = jest.fn();
  const onClick = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  it('이름 항목의 elemnet들을 확인합니다.', () => {
    const { queryByPlaceholderText, queryByDisplayValue, getByPlaceholderText } = render((
      <Reserve
        value="기존 식당이름"
        onChange={onChange}
      />));

    expect(queryByPlaceholderText(/이름/)).not.toBeNull();

    expect(queryByDisplayValue(/기존 식당이름/)).not.toBeNull();

    expect(onChange).not.toBeCalled();

    fireEvent.change(getByPlaceholderText(/이름/), {
      target: { value: '마녀식당' },
    });

    expect(onChange).toBeCalled();
  });

  it('분류 항목의 elemnet들을 확인합니다.', () => {
    const { queryByPlaceholderText, queryAllByDisplayValue, getByPlaceholderText } = render((
      <Reserve
        value="기존 식당분류"
        onChange={onChange}
      />));

    expect(queryByPlaceholderText(/분류/)).not.toBeNull();

    expect(queryAllByDisplayValue(/기존 식당분류/)).not.toBeNull();

    expect(onChange).not.toBeCalled();

    fireEvent.change(getByPlaceholderText(/분류/), {
      target: { value: '한식' },
    });

    expect(onChange).toBeCalled();
  });

  it('주소 항목의 elemnet들을 확인합니다.', () => {
    const { queryByPlaceholderText, queryAllByDisplayValue, getByPlaceholderText } = render((
      <Reserve
        value="기존 식당주소"
        onChange={onChange}
      />));

    expect(queryByPlaceholderText(/주소/)).not.toBeNull();

    expect(queryAllByDisplayValue(/기존 식당주소/)).not.toBeNull();

    expect(onChange).not.toBeCalled();

    fireEvent.change(getByPlaceholderText(/주소/), {
      target: { value: '서울시 강남구' },
    });

    expect(onChange).toBeCalled();
  });

  it('등록버튼시 식당의 이름, 분류, 주소를 추가합니다.', () => {
    const { getByText } = render((
      <Reserve
        onClick={onClick}
      />));

    expect(onClick).not.toBeCalled();

    fireEvent.click(getByText(/등록/));

    expect(onClick).toBeCalled();
  });
});
