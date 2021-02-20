import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import restaurants from '../fixture/restaurants';

import InputForm from './InputForm';

describe('InputFrom', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  function renderInput(restaurant = restaurants.restaurant) {
    return render(
      <InputForm
        restaurant={restaurant}
        onChange={handleChange}
        onClick={handleClick}
      />,
    );
  }

  it('입력란을 보여준다.', () => {
    const { queryByDisplayValue } = renderInput();

    expect(queryByDisplayValue('마녀 주방')).toBeInTheDocument();
    expect(queryByDisplayValue('한식')).toBeInTheDocument();
    expect(queryByDisplayValue('서울시 강남구')).toBeInTheDocument();
  });

  it('이름을 입력받으면 handleChange함수를 실행한다.', () => {
    const { queryByPlaceholderText } = renderInput();
    const inputInfos = [
      { placeHolder: '이름', value: '레스토랑' },
      { placeHolder: '분류', value: '양식' },
      { placeHolder: '주소', value: '서울시 송파구' },
    ];

    inputInfos.forEach(({ placeHolder, value }) => {
      fireEvent.change(queryByPlaceholderText(placeHolder), {
        target: { value },
      });
      expect(handleChange).toBeCalled();
    });
  });

  it('등록버튼을 클릭하면 handleClick을 실행한다.', () => {
    const { queryByText } = renderInput();

    fireEvent.click(queryByText('등록'));

    expect(handleClick).toBeCalled();
  });
});
