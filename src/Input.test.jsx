import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input은', () => {
  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  function renderInput(NameValue = '', CategoryValue = '', AddressValue = '') {
    return render(
      <Input
        NameValue={NameValue}
        CategoryValue={CategoryValue}
        AddressValue={AddressValue}
        onChangeName={handleChangeName}
        onChangeCategory={handleChangeCategory}
        onChangeAddress={handleChangeAddress}
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

  it('입력을 받으면 매칭되어 있는 handleChange함수를 실행한다.', () => {
    const { getByPlaceholderText } = renderInput();

    const inputInfos = [
      { placeholder: '이름', value: '마녀 주방', callback: handleChangeName },
      { placeholder: '종류', value: '한식', callback: handleChangeCategory },
      { placeholder: '주소', value: '서울시 강남구', callback: handleChangeAddress },
    ];

    inputInfos.forEach(({ placeholder, value, callback }) => {
      fireEvent.change(getByPlaceholderText(placeholder), {
        target: { value },
      });

      expect(callback).toBeCalled();
    });
  });

  it('등록 버튼을 누르면 handleClick함수가 실행된다.', () => {
    const { getByText } = renderInput('마녀 주방', '한식', '서울시 강남구');

    fireEvent.click(getByText('등록'));

    expect(handleClick).toBeCalled();
  });
});
