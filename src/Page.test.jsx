import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Page from './Page';

describe('Page', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const pageRender = () => render((
    <Page
      onChangeRestaurant={handleChange}
      onClickSubmit={handleClick}
    />
  ));

  const inputType = [
    { placeholderName: '이름', inputName: 'name', value: '마녀주방' },
    { placeholderName: '분류', inputName: 'type', value: '한식' },
    { placeholderName: '주소', inputName: 'address', value: '서울시 강남구' },
  ];

  it('"input"값이 변경되는지 확인한다.', () => {
    const { getByPlaceholderText } = pageRender();

    inputType.forEach(({ placeholderName, inputName, value }) => {
      fireEvent.change(getByPlaceholderText(placeholderName), {
        target: { value, name: inputName },
      });

      expect(getByPlaceholderText(placeholderName)).toHaveDisplayValue(value);
    });
  });

  it('등록 버튼 클릭시 호출되는지 확인한다.', () => {
    const { getByText, getByPlaceholderText } = pageRender();
    const button = getByText(/등록/);

    expect(button).not.toBeNull();

    expect(handleClick).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);

    inputType.forEach(({ placeholderName }) => {
      expect(getByPlaceholderText(placeholderName)).toHaveDisplayValue('');
    });
  });
});
