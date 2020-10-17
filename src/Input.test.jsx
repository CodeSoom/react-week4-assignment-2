import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();

  const inputRender = (restaurant) => render((
    <Input
      restaurant={restaurant}
      onChange={handleChange}
    />
  ));

  const inputType = [
    { placeholderName: '이름', inputName: 'name' },
    { placeholderName: '분류', inputName: 'category' },
    { placeholderName: '주소', inputName: 'address' },
  ];

  const restaurant = { name: '', category: '', address: '' };

  it('"input"이 보인다.', () => {
    const { getByPlaceholderText } = inputRender(restaurant);

    inputType.forEach(({ placeholderName }) => {
      expect(getByPlaceholderText(placeholderName)).not.toBeNull();
    });
  });

  it('handleChange 호출을 확인한다.', () => {
    const { getByPlaceholderText } = inputRender(restaurant);

    expect(handleChange).not.toBeCalled();

    inputType.forEach(({ placeholderName, inputName }) => {
      fireEvent.change(getByPlaceholderText(placeholderName), {
        target: { value: '시카고 피자', name: inputName },
      });
    });
    expect(handleChange).toBeCalled();
  });
});
