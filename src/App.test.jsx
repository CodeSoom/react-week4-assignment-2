import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const appRender = () => render((
    <App />
  ));

  const inputType = [
    { placeholderName: '이름', inputName: 'name', value: '마녀주방' },
    { placeholderName: '분류', inputName: 'category', value: '한식' },
    { placeholderName: '주소', inputName: 'address', value: '서울시 강남구' },
  ];

  it('"input" 입력 후 등록 버튼 클릭 후 화면에 나타나는지 확인한다.', () => {
    const { getByPlaceholderText, getByText, container } = appRender();

    inputType.forEach(({ placeholderName, inputName, value }) => {
      fireEvent.change(getByPlaceholderText(placeholderName), {
        target: { value, name: inputName },
      });

      expect(getByPlaceholderText(placeholderName)).toHaveDisplayValue(value);
    });

    fireEvent.click(getByText(/등록/));

    inputType.forEach(({ placeholderName, value }) => {
      expect(getByPlaceholderText(placeholderName)).toHaveDisplayValue('');
      expect(container).toHaveTextContent(value);
    });
  });
});
