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
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();

  const handleClickButton = jest.fn();

  function renderAddForm(inputTitles) {
    return render((
      <AddForm
        inputTitles={inputTitles}
        onChangeName={handleChangeName}
        onChangeCategory={handleChangeCategory}
        onChangeAddress={handleChangeAddress}
        onClickButton={handleClickButton}
      />
    ));
  }

  context('without inputTitles', () => {
    it('renders input placeholder', () => {
      const inputTitles = {
        name: '',
        category: '',
        address: '',
      };

      const { getByPlaceholderText } = renderAddForm(inputTitles);

      expect(getByPlaceholderText('이름')).not.toBeNull();
      expect(getByPlaceholderText('분류')).not.toBeNull();
      expect(getByPlaceholderText('주소')).not.toBeNull();
    });
  });

  context('with inputTitles', () => {
    it('renders input value', () => {
      const inputTitles = {
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      };

      const { getByDisplayValue } = renderAddForm(inputTitles);

      expect(getByDisplayValue('마녀주방')).not.toBeNull();
      expect(getByDisplayValue('한식')).not.toBeNull();
      expect(getByDisplayValue('서울시 강남구')).not.toBeNull();
    });
  });

  it("renders '등록' button", () => {
    const inputTitles = {
      name: '',
      category: '',
      address: '',
    };

    const { getByText } = renderAddForm(inputTitles);

    expect(getByText('등록')).not.toBeNull();
  });

  it('listens change event', () => {
    const inputTitles = {
      name: '',
      category: '',
      address: '',
    };

    const { getByPlaceholderText } = renderAddForm(inputTitles);
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
