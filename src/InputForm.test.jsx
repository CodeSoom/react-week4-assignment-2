import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InputForm from './InputForm';

describe('InputFrom', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  function renderInput(nameValue = '', categoryValue = '', addressValue = '') {
    return render(
      <InputForm
        nameValue={nameValue}
        categoryValue={categoryValue}
        addressValue={addressValue}
        onChange={handleChange}
        onClick={handleClick}
      />,
    );
  }

  it('입력란을 보여준다.', () => {
    const { getByDisplayValue } = renderInput('마녀 주방', '한식', '서울시 강남구');

    expect(getByDisplayValue('마녀 주방')).toBeInTheDocument();
    expect(getByDisplayValue('한식')).toBeInTheDocument();
    expect(getByDisplayValue('서울시 강남구')).toBeInTheDocument();
  });

  it('이름을 입력받으면 handleChange함수를 실행한다.', () => {
    const { getByPlaceholderText } = renderInput();
    const inputInfos = [
      { placeHolder: '이름', value: '마녀 주방' },
      { placeHolder: '분류', value: '한식' },
      { placeHolder: '주소', value: '서울시 강남구' },
    ];

    inputInfos.forEach(({ placeHolder, value }) => {
      fireEvent.change(getByPlaceholderText(placeHolder), {
        target: { value },
      });
      expect(handleChange).toBeCalled();
    });
  });

  it('등록버튼을 클릭하면 handleClick을 실행한다.', () => {
    const { getByText } = renderInput('마녀 주방', '한식', '서울시 강남구');

    fireEvent.click(getByText('등록'));

    expect(handleClick).toBeCalled();
  });
});
