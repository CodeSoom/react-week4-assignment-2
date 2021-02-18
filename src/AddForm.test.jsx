import React from 'react';

import { render } from '@testing-library/react';

import AddForm from './AddForm';

describe('AddForm', () => {
  const inputTitles = {
    name: '마녀주방',
    category: '한식',
    address: '서울시 강남구',
  };

  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();

  const handleClickButton = jest.fn();

  it('renders inputs', () => {
    const { getByPlaceholderText } = render((
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
  });
});
