import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import AddForm from './AddForm';

/**
 * input이 렌더링되는지?
 * button이 렌더링되는지?
 * input change event가 실행되는지?
 * button click event가 실행되는지?
 */

describe('AddForm', () => {
  const inputTitles = {
    name: '',
    category: '',
    address: '',
  };

  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();

  const handleClickButton = jest.fn();

  it('renders inputs and button', () => {
    const { getByText, getByPlaceholderText } = render((
      <AddForm
        inputTitles={inputTitles}
        onChangeName={handleChangeName}
        onChangeCategory={handleChangeCategory}
        onChangeAddress={handleChangeAddress}
        onClickButton={handleClickButton}
      />
    ));

    expect(getByPlaceholderText('이름')).not.toBeNull();
    expect(getByPlaceholderText('분류')).not.toBeNull();
    expect(getByPlaceholderText('주소')).not.toBeNull();

    expect(getByText('등록')).not.toBeNull();
  });

  it('listens change event', () => {
    const { getByPlaceholderText } = render((
      <AddForm
        inputTitles={inputTitles}
        onChangeName={handleChangeName}
        onChangeCategory={handleChangeCategory}
        onChangeAddress={handleChangeAddress}
        onClickButton={handleClickButton}
      />
    ));

    fireEvent.change(getByPlaceholderText('이름'), {
      target: {
        value: '한식',
      },
    });

    expect(handleChangeName).toBeCalled();

    fireEvent.change(getByPlaceholderText('분류'), {
      target: {
        value: '한식',
      },
    });

    expect(handleChangeCategory).toBeCalled();

    fireEvent.change(getByPlaceholderText('주소'), {
      target: {
        value: '서울 강남구',
      },
    });

    expect(handleChangeAddress).toBeCalled();
  });
});
