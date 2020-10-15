import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();

  const inputRender = () => render((
    <Input
      onChange={handleChange}
    />
  ));

  const inputType = [
    { placeholderName: '이름', inputName: 'name' },
    { placeholderName: '분류', inputName: 'type' },
    { placeholderName: '주소', inputName: 'address' },
  ];

  it('"input"이 존재하는지 확인한다.', () => {
    const { getByPlaceholderText } = inputRender();

    inputType.forEach(({ placeholderName }) => {
      expect(getByPlaceholderText(placeholderName)).not.toBeNull();
    });
  });

  it('값이 변경되는지 확인한다.', () => {
    const { getByPlaceholderText } = inputRender();

    inputType.forEach(({ placeholderName, inputName }) => {
      fireEvent.change(getByPlaceholderText(placeholderName), {
        target: { value: '시카고 피자', name: inputName },
      });

      expect(getByPlaceholderText(placeholderName)).toHaveDisplayValue('시카고 피자');
    });
  });
});
